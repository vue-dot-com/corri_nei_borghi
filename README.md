# Corri nei Borghi

Sito web del circuito podistico **Corri nei Borghi** - Val Seriana, Bergamo.

## Struttura del progetto

```
corri_nei_borghi/
├── index.html              # Homepage
├── tappe.html              # Pagina tappe/gare
├── classifiche.html        # Classifiche correnti
├── archive.html            # Archivio classifiche storiche
├── media.html              # Galleria foto
├── regolamenti.html        # Regolamento circuito
├── contatti.html            # Form contatti
├── iscrizioni.html          # Iscrizioni (Google Form)
├── robots.txt              # Indicizzazione motori di ricerca
├── sitemap.xml             # Mappa del sito
├── web.config              # Configurazione IIS (Aruba)
├── public/
│   ├── style/style.css     # Foglio di stile
│   ├── images/             # Immagini (loghi, percorsi, sponsor)
│   ├── media/              # Foto eventi (per anno/localita)
│   └── files/
│       ├── rankings/       # PDF classifiche
│       └── regulations/    # PDF regolamenti
└── src/
    ├── components/         # Template HTML riutilizzabili
    │   ├── header.html
    │   ├── offcanvas_header.html
    │   ├── footer.html
    │   ├── card.html
    │   └── ...
    └── javascript/
        ├── constants.js    # Dati gare e notizie
        └── utils.js        # Funzioni utilita
```

## Stack tecnologico

- **HTML5 + CSS3 + Vanilla JavaScript** (ES6 modules)
- **Bootstrap 5.3.3** (CDN)
- **Google Fonts** (Source Serif 4)
- Nessun framework, nessun build tool

## Come aggiungere dati

### Nuova gara (tappa)

1. Apri `src/javascript/constants.js`
2. Trova l'array `tappe` e l'oggetto dell'anno corrente
3. Aggiungi un nuovo oggetto `gara` nell'array `gare` con: `location`, `name`, `date`, `logo`, `programma`, `percorso`, ecc.

### Nuova notizia

1. Apri `src/javascript/constants.js`
2. Trova l'array `news`
3. Aggiungi un oggetto con `title`, `image` (opzionale), e `body` (HTML)

### Nuove classifiche PDF

1. Carica il file PDF in `public/files/rankings/`
2. Aggiorna il link nella gara corrispondente in `constants.js`

### Nuove foto

1. Carica le immagini (formato WebP) in `public/media/ANNO/LOCALITA/`
2. Aggiorna i link nella gara corrispondente in `constants.js` (`foto.category`)

## Deployment

Il deployment avviene automaticamente tramite **GitHub Actions** ad ogni push sul branch `main`.

- Pipeline: `.github/workflows/deploy-ftp.yml`
- Metodo: FTP verso hosting Aruba
- Credenziali: GitHub Secrets (`FTP_HOST`, `FTP_USERNAME`, `FTP_PASSWORD`)

## Server

- Configurazione: `web.config` (MIME type WebP, cache 365 giorni per `/public/`)
