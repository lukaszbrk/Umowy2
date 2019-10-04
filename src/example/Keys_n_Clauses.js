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
          "likwidacja"
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
      clause: "Assignment",
      keywords: {
        pl: [
          "cesja",
          "przenieść",
          "łączyć",
          "majątek",
          "wiążące",
          "następca",
          "cedować"
        ],

        en: [
          "assign",
          "delegate",
          "transfer",
          "assets",
          "binding",
          "successor",

          "merge"
        ]
      },
      description: "Klauzula określa w jakim trybie i zakresie strony umowy mogą scedować przysługujqce im prawa na strony trzecie"
    },

    {
      clause: "Waiver",
      keywords: {
        pl: [
          "środek zaradczy",
          "odstąpienie",
          "roszczenie",
          "podpisać",

          "środek zaradczy"
        ],

        en: ["waiver", "claim", "remedy", "execute"]
      },
      description:
        "Klauzula określa skutki dobrowolnego odstąpienia przez stronę umowy od wykonywania przysługujących praw"
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
        "Klauzula wskazująca prawo, jakie strony przyjeły za nadrzędne w stosunku do zawartej przez siebie umowy, czyli prawo stanowiące podstawę wykładni jej postanowień"
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
          "odstąpienie",

          "dobra wiara",
          "ugoda",
          "roszczenia",
          "spór",
          "negocjacje",
          "mediacja",
          "sąd powszechny",
     
          "siedziba",
   
            "ekspert",
            "raport"

           
        ],

        en: [
        
          "expert",
          "report",
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
          "waive",
          "common court",
          "good faith",
          "settlement",
          "negotiation",
          "seat"
        ]
      },
      description:
        "Klauzua, która zwalnia strony umowy od odpowiedzialności za zdarzenia nad którymi nie panują"
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
      clause: "Counterparts",
      keywords: {
        pl: ["kopia", "oryginał", "podpisać", "faksymile", "podpisać"],

        en: [
          "copy",
          "original",
          "execute",

          "counterpart",
          "facsimile",
          "signature"
        ]
      },
      description:
        "Klauzula określa liczbę egzemplarzy, w jakiej podpisana jest umowa oraz określa ich moc prawną"
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
          "środek zaradczy",
          "wiedza ogólna",
          "poufność",
          "domena publiczna",
          "naruszenie",
          "ujawnić",
      
      
    
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
          "remedy",
          "general knowledge",
          "public domain",
   
        ]
      },
      description:
        "Klauzula ta określa, w jaki sposób strony zobowiązują się korzystać z informacji poufnych pozyskanych od siebie w zwiazku z realizacją wiążącej je umowy"
    },    {
      clause: "Testimonium",
      keywords: {
        pl: [
          "podpisać",
          "upoważniony",
         
    

        ],

        en: [
          "authorised",
          "execute"
 
        ]
      },
      description:
        "Formuła końcowa bezpośrednio poprzedzająca podpisy stron"
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
