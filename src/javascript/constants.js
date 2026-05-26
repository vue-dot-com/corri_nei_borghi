/**
 * @file constants.js
 * @description Async loader for Corri Nei Borghi data from JSON files.
 * Data is split into separate JSON files under src/data/ for easier maintenance.
 */

/**
 * @typedef {Object} Programma
 * @property {string} partenzaBaby - Start time for the baby race.
 * @property {string} partenzaNonCompetitiva - Start time for the non-competitive race.
 * @property {Object} partenzaCompetitiva - Start times for the competitive race.
 * @property {string} partenzaCompetitiva.m - Start time for the men's competitive race.
 * @property {string} partenzaCompetitiva.f - Start time for the women's competitive race.
 * @property {string} ritrovo - Meeting point for the race.
 * @property {string} parcheggi - Parking information.
 * @property {string} docce - Shower availability.
 * @property {string} ristoro - Refreshment details.
 * @property {string} altro - Additional information.
 */

/**
 * @typedef {Object} Percorso
 * @property {Object} baby - Details of the baby race course.
 * @property {string} baby.km - Distance of the baby race.
 * @property {string} baby.dislivello - Elevation gain of the baby race.
 * @property {string} baby.img - Image of the baby race course.
 * @property {string} baby.gpx - GPX file for the baby race course.
 * @property {Object} nonCompetitiva - Details of the non-competitive race course.
 * @property {string} nonCompetitiva.km - Distance of the non-competitive race.
 * @property {string} nonCompetitiva.dislivello - Elevation gain of the non-competitive race.
 * @property {string} nonCompetitiva.img - Image of the non-competitive race course.
 * @property {string} nonCompetitiva.gpx - GPX file for the non-competitive race course.
 * @property {Object} competitiva - Details of the competitive race course.
 * @property {Object} competitiva.m - Men's competitive race details.
 * @property {string} competitiva.m.km - Distance of the men's competitive race.
 * @property {string} competitiva.m.dislivello - Elevation gain of the men's competitive race.
 * @property {Object} competitiva.f - Women's competitive race details.
 * @property {string} competitiva.f.km - Distance of the women's competitive race.
 * @property {string} competitiva.f.dislivello - Elevation gain of the women's competitive race.
 * @property {string} competitiva.img - Image of the competitive race course.
 * @property {string} competitiva.gpx - GPX file for the competitive race course.
 */

/**
 * @typedef {Object} Foto
 * @property {string} description - Description of the photos.
 * @property {string} copertina - Cover image for the photos.
 * @property {Object[]} category - Categories of photos.
 * @property {string} category[].name - Name of the photo category.
 * @property {string} category[].link - Link to the photo category.
 */

/**
 * @typedef {Object} Gara
 * @property {string} name - Name of the race.
 * @property {string} location - Location of the race.
 * @property {string} date - Date of the race.
 * @property {string} logo - Path to the race logo.
 * @property {string} description - Description of the race.
 * @property {string} imgCopertina - Cover image for the race.
 * @property {Programma} programma - Program details for the race.
 * @property {Percorso} percorso - Course details for the race.
 * @property {Object} nonCompetitiva - Links to non-competitive race rankings.
 * @property {string} nonCompetitiva.f - Link to the women's non-competitive race rankings.
 * @property {string} nonCompetitiva.m - Link to the men's non-competitive race rankings.
 * @property {Object} competitiva - Links to competitive race rankings.
 * @property {string} competitiva.f - Link to the women's competitive race rankings.
 * @property {string} competitiva.m - Link to the men's competitive race rankings.
 * @property {Object} links - Links related to the race.
 * @property {string} links.iscrizioni - Link to race registrations.
 * @property {string} links.classifiche - Link to race rankings.
 * @property {string} regolamento - Path to the race regulations file.
 * @property {Foto} foto - Photo details for the race.
 */

/**
 * @typedef {Object} Trofeo
 * @property {string} individuale - Link to individual trophy rankings.
 * @property {string} squadre - Link to team trophy rankings.
 * @property {Object} links - Links related to the trophy.
 * @property {string} links.classifiche - Link to trophy rankings.
 */

/**
 * @typedef {Object} Tappa
 * @property {number} year - Year of the race edition.
 * @property {Gara[]} gare - Array of races in the edition.
 * @property {Trofeo} trofeo - Trophy details for the edition.
 */

/**
 * @typedef {Object} News
 * @property {string} title - Title of the news (can be html).
 * @property {string} [image] - Path to the news image.
 * @property {string} body - Body content of the news (can be html).
 */

const config = await fetch("src/data/config.json").then((r) => r.json());
const years = await fetch("src/data/archive-years.json").then((r) => r.json());
const news = await fetch("src/data/news.json").then((r) => r.json());

const tappePromises = config.dataYears.map((year) =>
  fetch(`src/data/tappe/${year}.json`).then((r) => r.json()),
);
const tappe = await Promise.all(tappePromises);

export default {
  config,
  years,
  tappe,
  news,
};
