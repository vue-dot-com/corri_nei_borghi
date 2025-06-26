/**
 * @file constants.js
 * @description This file contains constants for the Corri Nei Borghi application, including years, race editions (tappe), and news.
 */

/**
 * @constant {number[]} years
 * @description An array of years representing the available editions of Corri Nei Borghi.
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
 * @constant {Tappa[]} tappe
 * @description An array of race editions (tappe) for Corri Nei Borghi.
 */

/**
 * @typedef {Object} News
 * @property {string} title - Title of the news (can be html).
 * @property {string} [image] - Path to the news image.
 * @property {string} body - Body content of the news (can be html).
 */

/**
 * @constant {News[]} news
 * @description An array of news items to be displayed in the news section.
 */
const years = [
  2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2022, 2023,
];

const tappe = [
  {
    year: 2024,
    gare: [
      {
        location: "Rovetta",
        name: "Rooster Run",
        date: "5 Luglio",
        logo: "/public/images/logos/rovetta.webp",
        description: "",
        imgCopertina:
          "https://mycity.s3.sbg.io.cloud.ovh.net/3509926/IMG_6559-(2).jpg",
        programma: {
          partenzaBaby: "18:45",
          partenzaNonCompetitiva: "19:30",
          partenzaCompetitiva: { m: "20:45", f: "20:15" },
          ritrovo: "18:30 in Rovetta (BG) presso la Piazza Marinoni",
          parcheggi: "",
          docce: "",
          ristoro:
            "Dalle ore 19:00 presso il parco giochi comunale (serata gastronomica organizzata dal Cre)",
          altro: "",
        },
        percorso: {
          baby: {
            km: "",
            dislivello: "",
            img: "",
            gpx: "",
          },
          nonCompetitiva: {
            km: "4,8 km",
            dislivello: "",
            img: "",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "6,4 km",
              dislivello: "",
              img: "",
              gpx: "",
            },
            f: {
              km: "4,8 km",
              dislivello: "",
              img: "",
              gpx: "",
            },
          },
        },
        nonCompetitiva: {
          f: "public/files/rankings/2024_rovetta_nc.pdf",
          m: "public/files/rankings/2024_rovetta_nc.pdf",
        },
        competitiva: {
          f: "public/files/rankings/2024_rovetta_c_f.pdf",
          m: "public/files/rankings/2024_rovetta_c_m.pdf",
        },
        links: {
          iscrizioni: "https://api.endu.net/r/i/86643",
          classifiche: "https://api.endu.net/r/r/86643",
        },
        regolamento: "public/files/regulations/2024_rovetta.pdf",
        foto: {
          description: "Foto a cura di Carlo G.",
          copertina: "public/media/2024/rovetta/2024_rovetta.webp",
          category: [
            {
              name: "",
              link: "https://www.facebook.com/share/p/L2JwgsoUjv8g3BWk/",
            },
          ],
        },
      },
      {
        name: "Verto..va Run Night",
        location: "Vertova",
        date: "12 Luglio",
        logo: "/public/images/logos/vertova.webp",
        description:
          "Gara di corsa su strada che si snoda tra le principali vie del centro storico. Nervosa e divertente allo stesso tempo. Il divertimento è assicurato!",
        imgCopertina:
          "https://upload.wikimedia.org/wikipedia/commons/7/7f/Vertova_panorama.jpg",
        programma: {
          partenzaBaby: "19:00",
          partenzaNonCompetitiva: "19:30",
          partenzaCompetitiva: { m: "20:45", f: "20:15" },
          ritrovo: "Via Roma, nei pressi dell'oratorio e del comune",
          parcheggi: "In zona stazione, all'ingresso del paese",
          docce: "Sì, in oratorio",
          ristoro: "Pasta party con birra e DJ Set in oratorio",
          altro:
            "Per Info ed eventuali domande sulle iscrizioni: Mirko Grassi 340/6635258",
        },
        percorso: {
          baby: {
            km: "Under 8: 350 mt. | Under 14: 900 mt. (possibilità di n.2 categorie in base agli iscritti)",
            dislivello: "",
            img: "public/images/courses/vertova_baby.webp",
            gpx: "",
          },
          nonCompetitiva: {
            km: "4,5 km",
            dislivello: "75m circa",
            img: "public/images/courses/vertova_nc_c.webp",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "6 km",
              dislivello: "100m circa",
            },
            f: {
              km: "4,5 km",
              dislivello: "75m circa",
            },
            img: "public/images/courses/vertova_nc_c.webp",
          },
        },
        nonCompetitiva: {
          f: "",
          m: "",
        },
        competitiva: {
          f: "",
          m: "",
        },
        links: {
          iscrizioni: "https://api.endu.net/r/i/86682",
          classifiche: "https://api.endu.net/r/r/86682",
        },
        regolamento: "public/files/regulations/2024_vertova.pdf",
        foto: {
          description: "",
          copertina: "public/media/2024/vertova/2024_vertova.webp",
          category: [
            {
              name: "",
              link: "https://www.facebook.com/share/p/SpurQBcanzCyufx6/",
            },
          ],
        },
      },
      {
        name: "CorrinCentro",
        location: "Clusone",
        date: "19 Luglio",
        logo: "/public/images/logos/clusone.webp",
        description:
          "La XVII edizione della corsa nel centro di uno dei Borghi Più Belli d'Italia",
        imgCopertina:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Clusone_Municipio_3.jpg/2560px-Clusone_Municipio_3.jpg",
        programma: {
          partenzaBaby: "19:45",
          partenzaNonCompetitiva: "20:20",
          partenzaCompetitiva: { m: "21:30", f: "21:00" },
          ritrovo: "Piazza Orologio",
          parcheggi:
            "Presso il Piazzale del Sole; Conad Viale Gusmini; Piazza Manzù (coperto)",
          docce: "No",
          ristoro: "Sì, solo arrivo",
          altro: "Iscrizioni in Piazza Orologio dalle 18:30",
        },
        percorso: {
          baby: {
            km: "Under 5: 320 mt | 6-14 anni: 750 mt",
            dislivello: "Under 5: 9 mt | 6-14 anni: 18 mt",
            img: "public/images/courses/clusone_baby.webp",
            gpx: "",
          },
          nonCompetitiva: {
            km: "4,5 km",
            dislivello: "99 mt",
            img: "public/images/courses/clusone_nc_c.webp",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "6 km",
              dislivello: "122 mt",
            },
            f: {
              km: "4,5 km",
              dislivello: "99 mt",
            },
            img: "public/images/courses/clusone_nc_c.webp",
            gpx: "",
          },
        },
        nonCompetitiva: {
          f: "",
          m: "",
        },
        competitiva: {
          f: "",
          m: "",
        },
        links: {
          iscrizioni: "https://api.endu.net/r/i/86720",
          classifiche: "https://api.endu.net/r/r/86720",
        },
        regolamento: "public/files/regulations/2024_clusone.pdf",
        foto: {
          description: "Foto a cura di Armin H.",
          copertina: "public/media/2024/clusone/2024_clusone.webp",
          category: [
            {
              name: "Non competitiva",
              link: "https://www.facebook.com/share/p/hTyRjVVH2v7yj4ji/",
            },
            {
              name: "Competitiva femminile",
              link: "https://www.facebook.com/share/p/c4sdW5qnAZpMeRVh/",
            },
            {
              name: "Competitiva maschile",
              link: "https://www.facebook.com/share/p/SubwnpsxdaH6cwxZ/",
            },
          ],
        },
      },
      {
        name: "Bèch to Run",
        location: "Gromo",
        date: "26 Luglio",
        logo: "/public/images/logos/gromo.webp",
        description: "Gara podistica per le vie del borgo medievale di Gromo",
        imgCopertina:
          "https://upload.wikimedia.org/wikipedia/commons/1/1d/Borgo_di_Gromo.jpg",
        programma: {
          partenzaBaby: "18:45",
          partenzaNonCompetitiva: "19:30",
          partenzaCompetitiva: { m: "20:45", f: "20:15" },
          ritrovo: "Piazza Dante",
          parcheggi: "Presso il piazzale del borgo, su via papa Giovanni XXIII",
          docce: "No",
          ristoro: "Pasta party a fine competizione in piazza Dante",
          altro:
            "Iscrizioni presso ufficio turistico in piazza Dante. Contatti: prolocogromo@gmail.com / Matteo 3922442636",
        },
        percorso: {
          baby: {
            km: "Under 8: 700 mt | 9-11 anni: 700 mt | 12-13 anni: 2,5 km",
            dislivello: "",
            img: "public/images/courses/gromo_baby.webp",
            gpx: "",
          },
          nonCompetitiva: {
            km: "4 km",
            dislivello: "",
            img: "public/images/courses/gromo_nc_c.webp",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "6 km",
              dislivello: "200 mt",
            },
            f: {
              km: "4 km",
              dislivello: "150 mt",
            },
            img: "public/images/courses/gromo_nc_c.webp",
            gpx: "",
          },
        },
        nonCompetitiva: {
          f: "",
          m: "",
        },
        competitiva: {
          f: "",
          m: "",
        },
        links: {
          iscrizioni: "https://api.endu.net/r/i/86765",
          classifiche: "https://api.endu.net/r/ec/86765",
        },
        regolamento: "public/files/regulations/2024_gromo.pdf",
        foto: {
          description: "Foto a cura di Cristian Riva e Marco Pendezza",
          copertina: "public/media/2024/gromo/2024_gromo.webp",
          category: [
            {
              name: "Baby e allievi",
              link: "https://www.facebook.com/permalink.php?story_fbid=pfbid0zk7y4oPGsfzXnR97RgTRje2rXPpybZimJ2sVVv8Ao24cuAMvJH5rPRuyKtBYHsbpl&id=100063918698801",
            },
            {
              name: "Non competitiva",
              link: "https://www.facebook.com/permalink.php?story_fbid=pfbid037gZPEQgcUzpt6uzAm5WGwvR2xXXUhTzCK2XLBsfzhxrggSxNDzaM5eRL93Z6mvEzl&id=100063918698801",
            },
            {
              name: "Competitiva femminile",
              link: "https://www.facebook.com/permalink.php?story_fbid=pfbid0i8T8dhF4n8ESF3XezXntNM6a8SZczjYGdeKiLyFfVHyvuTZjdWmEYPARAsHKHtxSl&id=100063918698801",
            },
            {
              name: "Competitiva maschile",
              link: "https://www.facebook.com/permalink.php?story_fbid=pfbid02cVNAEFGo3HFYd2PF5dUDgZuZvGfumVvB5r8MBLVAkbTfgWzd1BPvYLXir72gHFR6l&id=100063918698801",
            },
            {
              name: "Premiazioni",
              link: "https://www.facebook.com/permalink.php?story_fbid=pfbid02kR97GiM5KMrnH69m46cZYHoSigyz1Vrsg1YvJ5SFUQDiPPwYE3yewLDfHxsQWH2El&id=100063918698801",
            },
          ],
        },
      },
      {
        name: "1a sulle strade del Moroni",
        location: "Albino",
        date: "2 Agosto",
        logo: "",
        description: "La 1a sulle strade del Moroni. Non puoi mancare.",
        imgCopertina:
          "https://www.valseriana.eu/wp-content/uploads/2016/04/albino_chiesa_IMG_1596-20-800-600-80.jpg",
        programma: {
          partenzaBaby: "19:15",
          partenzaNonCompetitiva: "Esordienti: 19:30 | Liberi: 19:40",
          partenzaCompetitiva: { m: "20:45", f: "20:15" },
          ritrovo:
            "per le ore 18:30 Albino ( BG ) nei pressi dell'Oratorio Papa Giovanni XXIII in Via Don Cristoforo Rossi n.10",
          parcheggi: "",
          docce: "",
          ristoro: "",
          altro: "",
        },
        percorso: {
          baby: {
            km: "500 mt",
            dislivello: "",
            img: "",
            gpx: "",
          },
          nonCompetitiva: {
            km: "Esordienti: 1000 mt | Liberi: 1000 mt | Liberi: 4,8 km",
            dislivello: "",
            img: "",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "6,4 km",
              dislivello: "",
              img: "",
              gpx: "",
            },
            f: {
              km: "4,8 km",
              dislivello: "",
              img: "",
              gpx: "",
            },
          },
        },
        nonCompetitiva: {
          f: "",
          m: "",
        },
        competitiva: {
          f: "",
          m: "",
        },
        links: {
          iscrizioni: "https://api.endu.net/r/i/92117",
          classifiche: "https://api.endu.net/r/r/92117",
        },
        regolamento: "public/files/regulations/2024_albino.pdf",
        foto: {
          description: "Foto a cura di Monachino",
          copertina: "public/media/2024/albino/2024_albino.webp",
          category: [
            {
              name: "",
              link: "https://www.facebook.com/permalink.php?story_fbid=pfbid02mbj2YTbk1ggcYjKLobd6XZUDwHSSdLGqfxGHqGHDgYXRygyf97MFLhptDBPE4tZBl&id=100063918698801",
            },
          ],
        },
      },
      {
        name: "Corri Ardesio corri",
        location: "Ardesio",
        date: "9 Agosto",
        logo: "/public/images/logos/ardesio.webp",
        description: "",
        imgCopertina:
          "https://upload.wikimedia.org/wikipedia/commons/1/11/Ardesio_Landscape_01.JPG",
        programma: {
          partenzaBaby: "19:00",
          partenzaNonCompetitiva: "19:45",
          partenzaCompetitiva: { m: "21:00", f: "20:30" },
          ritrovo:
            "Per le ore 18:30 in Ardesio (BG) presso la Piazza B. Moretto",
          parcheggi: "",
          docce: "",
          ristoro: "",
          altro: "",
        },
        percorso: {
          baby: {
            km: "",
            dislivello: "",
            img: "",
            gpx: "",
          },
          nonCompetitiva: {
            km: "4,5 km",
            dislivello: "",
            img: "",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "6 km",
              dislivello: "",
              img: "",
              gpx: "",
            },
            f: {
              km: "4,5 km",
              dislivello: "",
              img: "",
              gpx: "",
            },
          },
        },
        nonCompetitiva: {
          f: "",
          m: "",
        },
        competitiva: {
          f: "",
          m: "",
        },
        links: {
          iscrizioni: "https://api.endu.net/r/i/86823",
          classifiche: "https://api.endu.net/r/r/86823",
        },
        regolamento: "public/files/regulations/2024_ardesio.pdf",
        foto: {
          description: "Foto a cura di Ph_iliset",
          copertina: "public/media/2024/ardesio/2024_ardesio.webp",
          category: [
            {
              name: "",
              link: "https://www.facebook.com/permalink.php?story_fbid=pfbid02QZCAKSgWZ17e9znacBSmUjNBKvDkQ6HS8iNnTngHpLSFBPB8QxoBhz62MkhNja3Yl&id=100063918698801",
            },
          ],
        },
      },
      {
        name: "RUN PAR Correndo nel Borgo di Parre",
        location: "Parre",
        date: "17 Agosto",
        logo: "/public/images/logos/parre.webp",
        description: "RUN PAR la corsa per tutti!",
        imgCopertina:
          "https://upload.wikimedia.org/wikipedia/commons/f/f8/Parre_landscape_01.JPG",
        programma: {
          partenzaBaby: "17:30",
          partenzaNonCompetitiva: "19:30",
          partenzaCompetitiva: { m: "20:15", f: "20:15" },
          ritrovo: "Oratorio G. Bosco via Roma",
          parcheggi: "All'aperto incustoditi",
          docce: "Sì, in oratorio",
          ristoro: "Pasta party",
          altro:
            "Iscrizioni baby dalle 16:00, non competiva e competitiva dalle 18",
        },
        percorso: {
          baby: {
            km: "R1 300m | R2 600 m | R3 1500 m",
            dislivello: "",
            img: "public/images/courses/parre_baby.webp",
            gpx: "",
          },
          nonCompetitiva: {
            km: "3 km",
            dislivello: "100m",
            img: "public/images/courses/parre_nc_c.webp",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "6 km",
              dislivello: "200m",
            },
            f: {
              km: "4,5 km",
              dislivello: "150m",
            },
            img: "public/images/courses/parre_nc_c.webp",
            gpx: "",
          },
        },
        nonCompetitiva: {
          f: "",
          m: "",
        },
        competitiva: {
          f: "",
          m: "",
        },
        links: {
          iscrizioni: "https://api.endu.net/r/i/86806",
          classifiche: "https://api.endu.net/r/r/86806",
        },
        regolamento: "public/files/regulations/2024_parre.pdf",
        foto: {
          description: "",
          copertina: "public/media/2024/parre/2024_parre.webp",
          category: [
            {
              name: "",
              link: "https://www.facebook.com/permalink.php?story_fbid=pfbid02RhAD1jfC1M4RJbL8jQdamUFsRyL3m6FP9dAyokWHMPRRCUKD5b5MRuKcDowZhsZxl&id=100063918698801",
            },
          ],
        },
      },
      {
        name: "4 PASS SÖ E ZO PER OL PAIS",
        location: "Cerete",
        date: "24 Agosto",
        logo: "/public/images/logos/cerete.webp",
        description:
          "XXVII° Memorial “Paolo Zambetti” 1° assoluto maschile VIII° Trofeo “Luigi Loda” 1° assoluta femminile VI° MEMORIAL DANILO FIORINA Trofeo per società",
        imgCopertina:
          "https://www.valseriana.eu/wp-content/uploads/2016/04/cerete_alto_chiesa_parrocchiale_santi_apostoli_filippo_e_giacomo__IMG_9441-52-800-600-80.jpg",
        programma: {
          partenzaBaby: "19:00",
          partenzaNonCompetitiva: "Ragazzi - Adolescenti: 19:15. Liberi: 19:30",
          partenzaCompetitiva: { m: "20:45", f: "20:15" },
          ritrovo:
            "Presso il centro sportivo “Danilo Fiorina” - Piazza Martiri della Libertà",
          parcheggi: "Scoperti, limitrofi",
          docce: "Sì, presso il centro sportivo",
          ristoro: "Sì",
          altro:
            "Ritrovo iscrizioni e ritiro pettorali ore 18:00. Contatti: ustccerete@gmail.com / Roberto Benzoni 3497579261",
        },
        percorso: {
          baby: {
            km: "1 km",
            dislivello: "15m",
            img: "public/images/courses/cerete_baby.webp",
            gpx: "",
          },
          nonCompetitiva: {
            km: "4 km",
            dislivello: "120m",
            img: "public/images/courses/cerete_nc_c.webp",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "5,6 km",
              dislivello: "160m",
            },
            f: {
              km: "4 km",
              dislivello: "120m",
            },
            img: "public/images/courses/cerete_nc_c.webp",
            gpx: "",
          },
        },
        nonCompetitiva: {
          f: "",
          m: "",
        },
        competitiva: {
          f: "",
          m: "",
        },
        links: {
          iscrizioni: "https://api.endu.net/r/i/86837",
          classifiche: "https://api.endu.net/r/r/86837",
        },
        regolamento: "public/files/regulations/2024_cerete.pdf",
        foto: {
          description: "Foto a cura di Carlo G.",
          copertina: "public/media/2024/cerete/2024_cerete.webp",
          category: [
            {
              name: "",
              link: "https://www.facebook.com/permalink.php?story_fbid=pfbid02pjLydNqkc5Fa4w4NriPrK9sM124oj7jqoNfEnFXKgQ1TUnNeM84LQgVc3uWVJrU3l&id=100063918698801",
            },
          ],
        },
      },
    ],
    trofeo: {
      individuale: "",
      squadre: "",
      links: {
        classifiche: "https://api.endu.net/r/r/85547",
      },
    },
  },
  {
    year: 2025,
    gare: [
      {
        name: "Verto..va Run Night",
        location: "Vertova",
        date: "11 Luglio",
        logo: "/public/images/logos/vertova.webp",
        description:
          "Gara di corsa su strada che si snoda tra le principali vie del centro storico. Nervosa e divertente allo stesso tempo. Il divertimento è assicurato!",
        imgCopertina:
          "https://upload.wikimedia.org/wikipedia/commons/7/7f/Vertova_panorama.jpg",
        programma: {
          partenzaBaby: "19:00",
          partenzaNonCompetitiva: "19:30",
          partenzaCompetitiva: { m: "20:45", f: "20:15" },
          ritrovo: "Via Roma, nei pressi dell'oratorio e del comune",
          parcheggi: "In zona stazione, all'ingresso del paese",
          docce: "Sì, in oratorio",
          ristoro: "Pasta party con birra e DJ Set in oratorio",
          altro:
            "Per Info ed eventuali domande sulle iscrizioni: Mirko Grassi 340/6635258",
        },
        percorso: {
          baby: {
            km: "Under 8: 350 mt. | Under 14: 900 mt. (possibilità di n.2 categorie in base agli iscritti)",
            dislivello: "",
            img: "public/images/courses/vertova_baby.webp",
            gpx: "",
          },
          nonCompetitiva: {
            km: "4,5 km",
            dislivello: "75m circa",
            img: "public/images/courses/vertova_nc_c.webp",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "6 km",
              dislivello: "100m circa",
            },
            f: {
              km: "4,5 km",
              dislivello: "75m circa",
            },
            img: "public/images/courses/vertova_nc_c.webp",
          },
        },
        nonCompetitiva: {
          f: "",
          m: "",
        },
        competitiva: {
          f: "",
          m: "",
        },
        links: {
          iscrizioni: "https://api.endu.net/r/i/93881",
          classifiche:
            "https://www.endu.net/en/events/corri-nei-borghi-vertova-2/results",
        },
        regolamento: "public/files/regulations/2025_vertova.pdf",
        foto: {
          description: "",
          copertina: "",
          category: [{ name: "", link: "" }],
        },
      },
      {
        name: "CorrinCentro",
        location: "Clusone",
        date: "18 Luglio",
        logo: "/public/images/logos/clusone.webp",
        description:
          "La XVIII edizione della corsa nel centro di uno dei Borghi Più Belli d'Italia",
        imgCopertina:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Clusone_Municipio_3.jpg/2560px-Clusone_Municipio_3.jpg",
        programma: {
          partenzaBaby: "19:45",
          partenzaNonCompetitiva: "20:20",
          partenzaCompetitiva: { m: "21:30", f: "21:00" },
          ritrovo: "Piazza Orologio",
          parcheggi:
            "Presso il Piazzale del Sole; Conad Viale Gusmini; Piazza Manzù (coperto)",
          docce: "No",
          ristoro: "Sì, solo arrivo",
          altro: "Iscrizioni in Piazza Orologio dalle 18:30",
        },
        percorso: {
          baby: {
            km: "Under 5: 320 mt | 6-14 anni: 750 mt",
            dislivello: "Under 5: 9 mt | 6-14 anni: 18 mt",
            img: "public/images/courses/clusone_baby.webp",
            gpx: "",
          },
          nonCompetitiva: {
            km: "4,5 km",
            dislivello: "99 mt",
            img: "public/images/courses/clusone_nc_c.webp",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "6 km",
              dislivello: "122 mt",
            },
            f: {
              km: "4,5 km",
              dislivello: "99 mt",
            },
            img: "public/images/courses/clusone_nc_c.webp",
            gpx: "",
          },
        },
        nonCompetitiva: {
          f: "",
          m: "",
        },
        competitiva: {
          f: "",
          m: "",
        },
        links: {
          iscrizioni: "https://api.endu.net/r/i/93940",
          classifiche:
            "https://www.endu.net/it/events/corri-nei-borghi-clusone-corri-in-centro/results",
        },
        regolamento: "public/files/regulations/2025_clusone.pdf",
        foto: {
          description: "",
          copertina: "",
          category: [{ name: "", link: "" }],
        },
      },
      {
        name: "SEMPER DE CORSA",
        location: "Gandino",
        date: "25 Luglio",
        logo: "/public/images/logos/gandino.webp",
        description: "Corsa podistica per le vie del paese",
        imgCopertina:
          "https://www.valseriana.eu/wp-content/uploads/2016/10/Gandino.jpg",
        programma: {
          partenzaBaby: "18:45",
          partenzaNonCompetitiva: "19:30",
          partenzaCompetitiva: { m: "20:45", f: "20:15" },
          ritrovo: "Piazza Vittorio Veneto, Gandino",
          parcheggi:
            "Via Vittorio Veneto (adiacenti a scuola materna), Via S.G. Bosco (adiacenti a Oratorio Sacro Cuore)",
          docce: "Sì, presso Gandinese Stadium",
          ristoro: "Sì, presso Piazza Santa Croce a cura del Bar Lù",
          altro:
            "Per info ed eventuali domande su iscrizioni: Aldo Bernardi cel.3487462047",
        },
        percorso: {
          baby: {
            km: "Categoria 0-5 anni: 450 mt (1 giro percorso azzurro); Categoria 6-9 anni: 900 mt (2 giri percorso azzurro); Categoria 10-13 anni: 1100 mt (1 giro percorso arancio)",
            dislivello: "",
            img: "public/images/courses/gandino_baby.webp",
            gpx: "",
          },
          nonCompetitiva: {
            km: "4.8 km (3 giri percorso rosso)",
            dislivello: "",
            img: "public/images/courses/gandino_nc_c.webp",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "6.4 km (4 giri percorso rosso)",
              dislivello: "",
            },
            f: {
              km: "4.8 km (3 giri percorso rosso)",
              dislivello: "",
            },
            img: "public/images/courses/gandino_nc_c.webp",
            gpx: "",
          },
        },
        nonCompetitiva: {
          f: "",
          m: "",
        },
        competitiva: {
          f: "",
          m: "",
        },
        links: {
          iscrizioni: "https://api.endu.net/r/i/100954",
          classifiche: "",
        },
        regolamento: "public/files/regulations/2025_gandino.pdf",
        foto: {
          description: "",
          copertina: "",
          category: [{ name: "", link: "" }],
        },
      },
      {
        name: "2a sulle strade del Moroni",
        location: "Albino",
        date: "1 Agosto",
        logo: "",
        description: "La 2a sulle strade del Moroni. Non puoi mancare.",
        imgCopertina:
          "https://www.valseriana.eu/wp-content/uploads/2016/04/albino_chiesa_IMG_1596-20-800-600-80.jpg",
        programma: {
          partenzaBaby: "19:15",
          partenzaNonCompetitiva: "Esordienti: 19:30 | Liberi: 19:40",
          partenzaCompetitiva: { m: "20:45", f: "20:15" },
          ritrovo:
            "Per le ore 18:30 Albino ( BG ) nei pressi dell'Oratorio Papa Giovanni XXIII in Via Don Cristoforo Rossi n.10",
          parcheggi: "",
          docce: "",
          ristoro: "",
          altro: "",
        },
        percorso: {
          baby: {
            km: "500 mt",
            dislivello: "",
            img: "",
            gpx: "",
          },
          nonCompetitiva: {
            km: "Esordienti: 1000 mt | Liberi: 1000 mt | Liberi: 4,8 km",
            dislivello: "",
            img: "",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "6,4 km",
              dislivello: "",
              img: "",
              gpx: "",
            },
            f: {
              km: "4,8 km",
              dislivello: "",
              img: "",
              gpx: "",
            },
          },
        },
        nonCompetitiva: {
          f: "",
          m: "",
        },
        competitiva: {
          f: "",
          m: "",
        },
        links: {
          iscrizioni: "https://api.endu.net/r/i/94019",
          classifiche: "",
        },
        regolamento: "public/files/regulations/2025_albino.pdf",
        foto: {
          description: "",
          copertina: "",
          category: [{ name: "", link: "" }],
        },
      },
      {
        name: "RUN PAR Correndo nel Borgo di Parre",
        location: "Parre",
        date: "9 Agosto",
        logo: "/public/images/logos/parre.webp",
        description: "RUN PAR la corsa per tutti!",
        imgCopertina:
          "https://upload.wikimedia.org/wikipedia/commons/f/f8/Parre_landscape_01.JPG",
        programma: {
          partenzaBaby: "17:30",
          partenzaNonCompetitiva: "19:30",
          partenzaCompetitiva: { m: "20:15", f: "20:15" },
          ritrovo: "Oratorio G. Bosco via Roma",
          parcheggi: "All'aperto incustoditi",
          docce: "Sì, in oratorio",
          ristoro: "Pasta party",
          altro:
            "Iscrizioni baby dalle 16:00, non competiva e competitiva dalle 18",
        },
        percorso: {
          baby: {
            km: "R1 300m | R2 600 m | R3 1500 m",
            dislivello: "",
            img: "public/images/courses/parre_baby.webp",
            gpx: "",
          },
          nonCompetitiva: {
            km: "3 km",
            dislivello: "100m",
            img: "public/images/courses/parre_nc_c.webp",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "6 km",
              dislivello: "200m",
            },
            f: {
              km: "4,5 km",
              dislivello: "150m",
            },
            img: "public/images/courses/parre_nc_c.webp",
            gpx: "",
          },
        },
        nonCompetitiva: {
          f: "",
          m: "",
        },
        competitiva: {
          f: "",
          m: "",
        },
        links: {
          iscrizioni: "https://api.endu.net/r/i/94059",
          classifiche: "",
        },
        regolamento: "public/files/regulations/2025_parre.pdf",
        foto: {
          description: "",
          copertina: "public/media/2024/parre/2024_parre.webp",
          category: [{ name: "", link: "" }],
        },
      },
      {
        name: "Bèch to Run",
        location: "Gromo",
        date: "13 agosto",
        logo: "/public/images/logos/gromo.webp",
        description: "Gara podistica per le vie del borgo medievale di Gromo",
        imgCopertina:
          "https://upload.wikimedia.org/wikipedia/commons/1/1d/Borgo_di_Gromo.jpg",
        programma: {
          partenzaBaby: "18:45",
          partenzaNonCompetitiva: "19:15",
          partenzaCompetitiva: { m: "20:30", f: "20:00" },
          ritrovo: "Piazza Dante, Gromo",
          parcheggi: "Presso il piazzale del borgo, su via papa Giovanni XXIII",
          docce: "No",
          ristoro: "Sì, a fine competizione in piazza Dante",
          altro:
            "Iscrizioni presso ufficio turistico in piazza Dante. Contatti: prolocogromo@gmail.com / Matteo 3922442636 / Francesca 3514324308",
        },
        percorso: {
          baby: {
            km: "Under 8: 700 mt | 9-11 anni: 700 mt | 12-13 anni: 2,5 km",
            dislivello: "",
            img: "public/images/courses/gromo_baby.webp",
            gpx: "",
          },
          nonCompetitiva: {
            km: "4 km",
            dislivello: "",
            img: "public/images/courses/gromo_nc_c.webp",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "6 km",
              dislivello: "200 mt",
            },
            f: {
              km: "4 km",
              dislivello: "150 mt",
            },
            img: "public/images/courses/gromo_nc_c.webp",
            gpx: "",
          },
        },
        nonCompetitiva: {
          f: "",
          m: "",
        },
        competitiva: {
          f: "",
          m: "",
        },
        links: {
          iscrizioni: "https://api.endu.net/r/i/93986",
          classifiche: "",
        },
        regolamento: "public/files/regulations/2025_gromo.pdf",
        foto: {
          description: "",
          copertina: "",
          category: [{ name: "", link: "" }],
        },
      },
      {
        name: "4 PASS SÖ E ZO PER OL PAIS",
        location: "Cerete",
        date: "23 Agosto",
        logo: "/public/images/logos/cerete.webp",
        description:
          "XXVIII° Memorial “Paolo Zambetti” 1° assoluto maschile IX° Trofeo “Luigi Loda” 1° assoluta femminile VII° MEMORIAL DANILO FIORINA Trofeo per società",
        imgCopertina:
          "https://www.valseriana.eu/wp-content/uploads/2016/04/cerete_alto_chiesa_parrocchiale_santi_apostoli_filippo_e_giacomo__IMG_9441-52-800-600-80.jpg",
        programma: {
          partenzaBaby: "19:00",
          partenzaNonCompetitiva: "Ragazzi - Adolescenti: 19:15. Liberi: 19:30",
          partenzaCompetitiva: { m: "20:45", f: "20:15" },
          ritrovo:
            "Presso il centro sportivo “Danilo Fiorina” - Piazza Martiri della Libertà",
          parcheggi: "Scoperti, limitrofi",
          docce: "Sì, presso il centro sportivo",
          ristoro: "Sì",
          altro:
            "Ritrovo iscrizioni e ritiro pettorali ore 18:00. Contatti: ustccerete@gmail.com / Roberto Benzoni 3497579261",
        },
        percorso: {
          baby: {
            km: "1 km",
            dislivello: "15m",
            img: "public/images/courses/cerete_baby.webp",
            gpx: "",
          },
          nonCompetitiva: {
            km: "4 km",
            dislivello: "120m",
            img: "public/images/courses/cerete_nc_c.webp",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "5,6 km",
              dislivello: "160m",
            },
            f: {
              km: "4 km",
              dislivello: "120m",
            },
            img: "public/images/courses/cerete_nc_c.webp",
            gpx: "",
          },
        },
        nonCompetitiva: {
          f: "",
          m: "",
        },
        competitiva: {
          f: "",
          m: "",
        },
        links: {
          iscrizioni: "https://api.endu.net/r/i/94075",
          classifiche: "",
        },
        regolamento: "public/files/regulations/2025_cerete.pdf",
        foto: {
          description: "",
          copertina: "",
          category: [{ name: "", link: "" }],
        },
      },
    ],
    trofeo: {
      individuale: "",
      squadre: "",
      links: {
        classifiche:
          "https://www.endu.net/en/events/corri-nei-borghi-circuito-2/results",
      },
    },
  },
];

const news = [
  {
    title: `
    📣 Iscrizioni aperte! Manca poco 🏃‍♂️🏃‍♀️`,
    image: "",
    body: `
    <p>
  <strong>🏁 Sono ufficialmente aperte le iscrizioni per la Corri nei Borghi 2025!</strong>
</p>
<p>
  👉 Puoi registrati alle tappe tramite Endu, accedi all'iscrizione per ogni singola tappa dalla pagina <a href="/tappe.html" target="_blank">tappe</a>!<br>
</p>
<p>
  <strong>Novità 2025:</strong> <br>
  Premio speciale <b>UNO DI NOI</b> riservato alle sole categorie Senior: chi risulterà in classifica in tutte le 7 tappe, indipendentemente dagli scarti obbligatori, riceverà una <b>Ledlenser MH-5, Torcia Frontale Ricaricabile</b> da ritirare all’ultima tappa di Cerete!
  <div class="accordion-news-image">
  <img src="public/images/2025_premio_uno_di_noi.webp" alt="Ledlenser MH-5" class="img-thumbnail"/>
  </div>
</p>
<p>
  Ti invitiamo a prendere visione del <a href="public/files/regulations/2025_circuito.pdf" target="_blank">regolamento</a> per tutti i dettagli.<br>
  Per qualsiasi domanda puoi consultare la <a href="/contatti.html" target="_blank">sezione contatti</a> o rivolgerti direttamente ai contatti indicati per ciascuna tappa.
</p>
    `,
  },

  {
    title: `
    📱 Seguici sui nostri social&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ef8a16"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ef8a16"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                  />
                </svg>
    `,
    image: "",
    body: `
     Corri a seguire le nostre pagine social per le ultime news,
                foto, stories e molto altro! Le icone social sono sempre a
                portata di click nel menù principale, ti aspettiamo 🏃🏃‍♀️
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100063918698801&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="340"
                    height="500"
                    style="border: none; overflow: hidden"
                    scrolling="no"
                    frameborder="2"
                    allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                  <iframe
                    width="340"
                    height="500"
                    src="https://www.instagram.com/corrineiborghi/embed/"
                    frameborder="2"
                  ></iframe>
                </div>
    `,
  },
];

export default {
  years,
  tappe,
  news,
};
