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
          "zaniedbanie",
          "niezgodność",
          "wymienić",
          "zwrot"
        ],
        en: [
          "warranty",
          "compliance",
          "liable",
          "defect",
          "discovery",
          "notice",
          "consequential",
          "claim",
          "injury",
          "replace",
          "refund"
        ]
      },
      description:
        "Potwierdzenie prawdziwosci faktów, które skloniły strony do przystąpienia do umowy; udzielenie rękojmi za ewentualne wady prawne lub wady fizyczne rzeczy, których umowa dotyczy"
    },

    {
      clause: "Termination",
      keywords: {
        pl: ["wygaśnięcie", "rozwiązanie", "anulować", "odszkodowanie"],
        en: ["expiration", "termination", "cancel", "compensation"]
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
        pl: [
          "okoliczności",
          "odpowiedzialność",
          "strajk",
          "dotrzymać",
          "zaniedbanie",
          "odpowiedzialność",
          "odstąpienie",
          "zobowiązanie"
        ],

        en: [
          "liability",
          "stoppage",
          "circumstances",
          "notice",
          "comply",
          "negligence",
          "suspend",
          "terminate",
          "obligation"
        ]
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
          "norma kolizyjna",
          "Konwencja Narodów Zjednoczonych",

          "Kodeks cywilny"
        ],

        en: [
          "govern",
          "construe",
          "conflict",
          "United Nations Convention",
          "Civil Code"
        ]
      },
      description:
        "Zdarzenia o charakterze przypadkowym lub naturalnym, nie do uniknięcia lub nad którym człowiek nie panuje"
    },
    {
      clause: "Notices",
      keywords: {
        pl: [
          "z zastrzeżeniem",
          "powiadomienia",
          "nadanie",
          "przesyłka",
          "dzień roboczy",
          "nadanie",
          "doręczanie",
          "kurier",
          "list polecony",
          "adres"
        ],

        en: [
          "notice",
          "deem",
          "facsimile",
          "delivery",
          "woking day",
          "subject to",
          "courier",
          "registered mail",
          "return receipt",
          "address"
        ]
      },
      description:
        "Klauzula określa tryb prowadzenia korespondencji pomiędzy stronami umowy"
    },

    {
      clause: "Confidentiality",
      keywords: {
        pl: [
          "poufne",
          "ujawniać",
          "tajne",
          "zabezpieczenia",
          "zobowiązania",
          "domena publiczna",
          "nakaz",
          "środek zaradczy"
        ],

        en: [
          "confidential",
          "disclose",
          "secrecy",
          "measures",

          "bound",
          "obligation",
          "public domain",
          "order",
          "remedy"
        ]
      },
      description:
        "Klauzula ta określa, w jaki sposób strony zobowiązują się korzystać z informacji poufnych pozyskanych od siebie w zwiazku z realizacją wiążącej je umowy"
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
