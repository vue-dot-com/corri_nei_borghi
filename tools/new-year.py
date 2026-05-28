#!/usr/bin/env python3
"""Corri nei Borghi - Year rollover automation.

Usage: python tools/new-year.py <new_year>
Example: python tools/new-year.py 2027
"""

import json
import sys
import io
import datetime
from pathlib import Path

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "src" / "data"


def to_roman(num: int) -> str:
    vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    syms = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    result = []
    for val, sym in zip(vals, syms):
        while num >= val:
            result.append(sym)
            num -= val
    return "".join(result)


def read_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path: Path, data):
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def replace_in_file(path: Path, replacements: list[tuple[str, str]]) -> int:
    content = path.read_text(encoding="utf-8")
    count = 0
    for search, replace in replacements:
        n = content.count(search)
        count += n
        content = content.replace(search, replace)
    path.write_text(content, encoding="utf-8")
    return count


def scaffold_tappe(prev_data: dict, new_year: int) -> dict:
    import copy
    template = copy.deepcopy(prev_data)
    template["year"] = new_year

    for gara in template["gare"]:
        gara["date"] = ""
        gara["isoDate"] = ""
        gara["nonCompetitiva"] = {"f": "", "m": ""}
        gara["competitiva"] = {"f": "", "m": ""}
        gara["links"] = {"iscrizioni": "", "classifiche": ""}
        gara["regolamento"] = ""
        foto = gara.get("foto", {})
        gara["foto"] = {
            "description": foto.get("description", ""),
            "copertina": "",
            "category": [{"name": c["name"], "link": ""} for c in foto.get("category", [])],
        }

    template["trofeo"] = {
        "individuale": "",
        "squadre": "",
        "links": {"classifiche": ""},
    }

    return template


def main():
    if len(sys.argv) != 2:
        print("Usage: python tools/new-year.py <year>")
        print("Example: python tools/new-year.py 2027")
        sys.exit(1)

    try:
        new_year = int(sys.argv[1])
    except ValueError:
        print("Error: year must be a number.")
        sys.exit(1)

    if new_year < datetime.datetime.now().year:
        print(f"Error: year {new_year} out of range (2025-2100).")
        sys.exit(1)

    config = read_json(DATA / "config.json")
    old_year = config["currentYear"]
    old_edition = config["edition"]
    new_edition_num = new_year - 2007
    new_edition = to_roman(new_edition_num)

    if new_year <= old_year:
        print(f"Error: new year ({new_year}) must be greater than current year ({old_year}).")
        sys.exit(1)

    print(f"\n  Corri nei Borghi — Year Rollover")
    print(f"  {old_year} ({old_edition}) → {new_year} ({new_edition})\n")

    # 1. Update config.json
    config["currentYear"] = new_year
    config["edition"] = new_edition

    if new_year not in config["dataYears"]:
        config["dataYears"].append(new_year)

    archive_path = DATA / "archive-years.json"
    archive = read_json(archive_path)

    while len(config["dataYears"]) > 3:
        evicted = config["dataYears"].pop(0)
        if evicted not in archive:
            archive.append(evicted)
            archive.sort()

    write_json(DATA / "config.json", config)
    print(f"  ✓ config.json → currentYear: {new_year}, edition: {new_edition}, dataYears: {config['dataYears']}")

    write_json(archive_path, archive)
    print(f"  ✓ archive-years.json updated")

    # 2. Scaffold new tappe file
    new_tappe_path = DATA / "tappe" / f"{new_year}.json"
    if new_tappe_path.exists():
        print(f"  ⊘ tappe/{new_year}.json already exists — skipped")
    else:
        prev_tappe_path = DATA / "tappe" / f"{old_year}.json"
        prev_data = read_json(prev_tappe_path)
        new_data = scaffold_tappe(prev_data, new_year)
        write_json(new_tappe_path, new_data)
        print(f"  ✓ tappe/{new_year}.json created ({len(new_data['gare'])} races scaffolded from {old_year})")

    # 3. Update HTML files
    html_files = [
        "index.html",
        "tappe.html",
        "iscrizioni.html",
        "regolamenti.html",
        "contatti.html",
        str(Path("src") / "components" / "sponsor.html"),
    ]

    replacements = [
        (str(old_year), str(new_year)),
        (f"{old_edition}^", f"{new_edition}^"),
        (f"{old_edition} ", f"{new_edition} "),
    ]

    print()
    for file in html_files:
        file_path = ROOT / file
        if not file_path.exists():
            continue
        count = replace_in_file(file_path, replacements)
        print(f"  ✓ {file} — {count} replacement{'s' if count != 1 else ''}")

    # 4. Manual tasks checklist
    print(f"""
  ─────────────────────────────────────
  Manual tasks remaining:
  ─────────────────────────────────────

  □ Fill in race dates and isoDate fields in src/data/tappe/{new_year}.json
  □ Update prose dates in index.html (e.g. "11 luglio al 29 agosto")
  □ Update specific dates in regolamenti.html (e.g. "sabato 23.08.{old_year}")
  □ Create public/images/{new_year}_tappe_tile.webp
  □ Create public/images/{new_year}_banner_comuni.webp
  □ Upload public/files/regulations/{new_year}_circuito.pdf
  □ Update race descriptions with new edition numbers in tappe/{new_year}.json
  □ Review all changes with: git diff
""")


if __name__ == "__main__":
    main()
