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
          partenzaBaby: "",
          partenzaNonCompetitiva: "",
          partenzaCompetitiva: { m: "", f: "" },
          ritrovo: "",
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
            km: "",
            dislivello: "",
            img: "",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "",
              dislivello: "",
              img: "",
              gpx: "",
            },
            f: {
              km: "",
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
        regolamento: "",
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
            km: "Under 8: 350 mt. Under 14: 900 mt. (possibilità di n.2 categorie in base agli iscritti) ",
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
        regolamento: "public/files/regulations/2024_vertova.pdf",
      },
      {
        name: "CorrinCentro",
        location: "Clusone",
        date: "19 Luglio",
        logo: "/public/images/logos/clusone.jpg",
        description: "",
        imgCopertina:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Clusone_Municipio_3.jpg/2560px-Clusone_Municipio_3.jpg",
        programma: {
          partenzaBaby: "",
          partenzaNonCompetitiva: "",
          partenzaCompetitiva: { m: "", f: "" },
          ritrovo: "",
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
            km: "",
            dislivello: "",
            img: "",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "",
              dislivello: "",
              img: "",
              gpx: "",
            },
            f: {
              km: "",
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
        regolamento: "",
      },
      {
        name: "Bèch to Run",
        location: "Gromo",
        date: "26 Luglio",
        logo: "/public/images/logos/gromo.png",
        description: "",
        imgCopertina:
          "https://upload.wikimedia.org/wikipedia/commons/1/1d/Borgo_di_Gromo.jpg",
        programma: {
          partenzaBaby: "",
          partenzaNonCompetitiva: "",
          partenzaCompetitiva: { m: "", f: "" },
          ritrovo: "",
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
            km: "",
            dislivello: "",
            img: "",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "",
              dislivello: "",
              img: "",
              gpx: "",
            },
            f: {
              km: "",
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
        regolamento: "",
      },
      {
        name: "",
        location: "Albino",
        date: "2 Agosto",
        logo: "",
        description: "",
        imgCopertina:
          "https://www.valseriana.eu/wp-content/uploads/2016/04/albino_chiesa_IMG_1596-20-800-600-80.jpg",
        programma: {
          partenzaBaby: "",
          partenzaNonCompetitiva: "",
          partenzaCompetitiva: { m: "", f: "" },
          ritrovo: "",
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
            km: "",
            dislivello: "",
            img: "",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "",
              dislivello: "",
              img: "",
              gpx: "",
            },
            f: {
              km: "",
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
        regolamento: "",
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
          partenzaBaby: "",
          partenzaNonCompetitiva: "",
          partenzaCompetitiva: { m: "", f: "" },
          ritrovo: "",
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
            km: "",
            dislivello: "",
            img: "",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "",
              dislivello: "",
              img: "",
              gpx: "",
            },
            f: {
              km: "",
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
        regolamento: "",
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
            km: "R1 300m - R2 600 m - R3 1500 m",
            dislivello: "",
            img: "",
            gpx: "",
          },
          nonCompetitiva: {
            km: "3 km",
            dislivello: "100m",
            img: "",
            gpx: "",
          },
          competitiva: {
            m: {
              km: "6 km",
              dislivello: "200m",
              img: "",
              gpx: "",
            },
            f: {
              km: "4,5 km",
              dislivello: "150m",
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
        regolamento: "public/files/regulations/2024_parre.pdf",
      },
      {
        name: "4 PASS SÖ E ZO PER OL PAIS",
        location: "Cerete",
        date: "28 Agosto",
        logo: "/public/images/logos/cerete.png",
        description:
          "XXVII° Memorial “Paolo Zambetti” 1° assoluto maschile VIII° Trofeo “Luigi Loda” 1° assoluta femminile VI° MEMORIAL DANILO FIORINA Trofeo per società",
        imgCopertina:
          "https://www.valseriana.eu/wp-content/uploads/2016/04/cerete_alto_chiesa_parrocchiale_santi_apostoli_filippo_e_giacomo__IMG_9441-52-800-600-80.jpg",
        programma: {
          partenzaBaby: "19:00",
          partenzaNonCompetitiva: "Ragazzi - Adolescenti: 19:15. Liberi: 20.15",
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
              km: "5,6 km",
              dislivello: "160m",
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
        regolamento: "public/files/regulations/2024_cerete.pdf",
      },
    ],
    trofeo: { individuale: "", squadre: "" },
  },
];

export default {
  years,
  tappe,
};
