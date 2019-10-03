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
        pl: [
          "wygaśnięcie",
          "rozwiązanie",
          "anulować",
          "odszkodowanie",
          "naruszyć",
          "naprawić",
          "powiadomienie",

          "niewypłacalność",
          "upadłość",
          "wszczynać",
          "postępowanie",
 
          "restrukturyzacja",
          "układ",
          "cesja",
          "wierzyciel",
          "syndyk",
          "likwidator",
          "powiernik",
          "likwidacja",
       
          
        ],
        en: [
          
          "insolvent",
          "bankrupt",
          "institute",
          "proceeding",
          "relief",
          "reorganization",
          "arrangement",
          "creditor",
          "receiver",
          "liquidator",
          "trustee",
          "disolution",
          "wind up",

          "expiration",
          "termination",
          "cancel",
          "compensation",
          "breach",
          "cure",
          "notice"
        ]
      },
      description: "Postanowienia regulujące tryb i termin wypowiedzenia umowy"
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
      clause: "Indemnification",
      keywords: {
        pl: [
          "żądanie",
          "odpowiedzialność",
          "podwykonawca",
          "dyrektor",
          "kierownictwo",
          "przedstawiciel",
          "pełnomocnik",
          "roszczenie",
          "pozew",
          "postępowanie",
          "wszczęcie",
          "zwrócić",
          "powiadomienie",
          "ponieść",
          "koszt",
          "ugoda",
          "zgoda",
          "odszkodowanie",
          "wydatki",
          "nałożyć"
        ],

        en: [
          "defend",
          "hold harmless",
          "subcontractor",
          "director",
          "officer",
          "agent",
          "representative",
          "claim",
          "suit",
          "action",
          "proceeding",
          "incur",
          "reimburse",
          "settlement",
          "consent",
          "cost",
          "damages",
          "expenses",
          "fee",
          "award"
        ]
      },
      description:
        "W klauzuli tej jedna ze stron umowy przejmuje na siebie odpowiedzialność z tytułu wybranych roszczeń, jakie moga zostać  zgloszone w stosunku do drugiej ze stron oraz zobowiązuje się do zrekompensowania jej strat, szkód, kosztów, etc., jakie moze ona w związku z tym ponieść."
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
        "Klauzula, która zwalnia strony umowy od odpowiedzialności za zdarzenia, na które nie mają one wpływu"
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
      clause: "Arbitration",
      keywords: {
        pl: [
          "spory",
          "roszczenie",
          "arbitraż",
          "arbiter",
          "orzeczenie",
      
          "sąd właściwy",
          "wydać",
          "postępowanie",
          "egzekwować",
     
          "sąd stanowy",
          "zabezpieczenie",
          "nakaz sądowy",
          "odstąpienie"
        ],

        en: [
          "dispute",
          "claim",
          "controversy",
          "arbitration",
          "arbitrator",
          "judgment",
          "award",
          "render",
          "court",
          "jurisdiction",
          "litigation",
          "enforce",
          "arbitration award",
          "state court",
          "competent court",
          "injunctive relief",
          "waive"
        ]
      },
      description: ""
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
          "doręczanie",
          "kurier",
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
          "preclude",
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
