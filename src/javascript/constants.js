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
        logo: "/public/images/logos/rovetta.jpg",
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
          copertina: "public/media/2024/rovetta/2024_rovetta.jpg",
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
        logo: "/public/images/logos/vertova.png",
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
            img: "public/images/courses/vertova_baby.png",
            gpx: "",
          },
          nonCompetitiva: {
            km: "4,5 km",
            dislivello: "75m circa",
            img: "public/images/courses/vertova_nc_c.png",
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
            img: "public/images/courses/vertova_nc_c.png",
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
          copertina: "public/media/2024/vertova/2024_vertova.jpg",
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
        logo: "/public/images/logos/clusone.jpg",
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
            img: "public/images/courses/clusone_baby.png",
            gpx: "",
          },
          nonCompetitiva: {
            km: "4,5 km",
            dislivello: "99 mt",
            img: "public/images/courses/clusone_nc_c.png",
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
            img: "public/images/courses/clusone_nc_c.png",
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
          copertina: "public/media/2024/clusone/2024_clusone.jpg",
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
        logo: "/public/images/logos/gromo.png",
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
            img: "public/images/courses/gromo_baby.png",
            gpx: "",
          },
          nonCompetitiva: {
            km: "4 km",
            dislivello: "",
            img: "public/images/courses/gromo_nc_c.png",
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
            img: "public/images/courses/gromo_nc_c.png",
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
          copertina: "public/media/2024/gromo/2024_gromo.jpg",
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
          copertina: "public/media/2024/albino/2024_albino.jpg",
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
        logo: "/public/images/logos/ardesio.jpg",
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
          copertina: "public/media/2024/ardesio/2024_ardesio.jpg",
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
        logo: "/public/images/logos/parre.jpg",
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
            img: "public/images/courses/parre_baby.png",
            gpx: "",
          },
          nonCompetitiva: {
            km: "3 km",
            dislivello: "100m",
            img: "public/images/courses/parre_nc_c.png",
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
            img: "public/images/courses/parre_nc_c.png",
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
          copertina: "public/media/2024/parre/2024_parre.jpg",
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
        logo: "/public/images/logos/cerete.png",
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
            img: "public/images/courses/cerete_baby.png",
            gpx: "",
          },
          nonCompetitiva: {
            km: "4 km",
            dislivello: "120m",
            img: "public/images/courses/cerete_nc_c.png",
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
            img: "public/images/courses/cerete_nc_c.png",
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
          copertina: "public/media/2024/cerete/2024_cerete.jpg",
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
];

export default {
  years,
  tappe,
};
