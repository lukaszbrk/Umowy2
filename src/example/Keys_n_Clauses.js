export function getSource() {
  let source = [
    {
      clause: "Commencement",
      keywords: {
        pl: ["zawrzeć", "Krajowy Rejestr Sądowy", "kapitał zakładowy", "REGON"],

        en: [
          "enter into",
          "share capital",
          "National Business Registry Number",
          "National Court Register"
        ]
      },
      description: "Nazwa umowy wraz z oznaczeniem czasu i miejsca jej zawarcia"
    },
    {
      clause: "Recitals",
      keywords: {
        pl: ["zobowiązać się", "zważywszy"],
        en: ["therefore", "whereas", "covenant"]
      },
      description: "Przedstawienie okolicznosci poprzedzających zawarcie umowy"
    },
    {
      clause: "Definitions",
      keywords: {
        pl: ["definicje", "termin"],
        en: ["definitions", "meaning", "terms"]
      },
      description: "Definicje kluczowych terminöw"
    },

    {
      clause: "Warranties and Representations",
      keywords: {
        pl: [
          "gwarantować",
          "jakość",
          "odpowiedzialność",
          "wada",
          "szkody",
          "roszczenia",
          "zaniedbanie"
        ],
        en: [
          "warranty",
          "comply",

          "liable",
          "defect",
          "discovery",
          "notice",

          "consequential",
          "claim",
          "injury"
        ]
      },
      description:
        "Potwierdzenie prawdziwosci faktów, które skloniły strony do przystąpienia do umowy; udzielenie rękojmi za ewentualne wady prawne lub wady fizyczne rzeczy, których umowa dotyczy"
    },

    {
      clause: "Termination",
      keywords: {
        pl: ["wygaśnięcie", "rozwiązanie"],
        en: ["expiration", "termination"]
      },
      description: "Postanowienia dotyczące rozwiązywania umowy"
    },

    {
      clause: "Severability",
      keywords: {
        pl: ["niewykonalne", "egzekwować", "moc", "skuteczność"],
        en: ["unenforceable", "enforce", "full force and effect"]
      },
      description:
        "Klauzula określająca skutki, jakie dla całości umowy wynikają z uznania części jej postanowień za nieważne lub niewykonalne"
    },

    {
      clause: "Force Majeure",
      keywords: {
        pl: ["okoliczności", "odpowiedzialność", "strajk"],

        en: ["liability", "stoppage", "circumstances", "notice"]
      },
      description:
        "Zdarzenia o charakterze przypadkowym lub naturalnym, nie do uniknięcia lub nad którym człowiek nie panuje"
    },

    {
      clause: "Governing Law",
      keywords: {
        pl: [
          "podlegać",
          "interpretować",
          "prawo właściwe",
          "wykładnia",
          "norma kolizyjna"
        ],

        en: ["govern", "construe", "conflict"]
      },
      description:
        "Zdarzenia o charakterze przypadkowym lub naturalnym, nie do uniknięcia lub nad którym człowiek nie panuje"
    }
  ];

  return source;
}

export function detLang(keyword) {
  let entry;
  let pl = false;
  let s = getSource();

  for (entry in s) {
  
    if (s[entry]["keywords"]["pl"].includes(keyword)) {
   
      pl = true;
      break;
    }
  }

  return pl;
}
