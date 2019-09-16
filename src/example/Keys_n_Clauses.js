

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
            "Potwierdzenie prawdziwosci faktów, które skloniły je do przystąpienia do umowy; udzielenie rękojmi za ewentualne wady prawne lub wady fizyczne rzeczy, których umowa dotyczy"
        },
      
        {
          clause: "Force Majeure",
          keywords: {
            pl: ["okoliczności", "odpowiedzialność", "strajk"],
      
            en: ["liability", "stoppage", "circumstances", "notice"]
          },
          description:
            "Zdarzenia o charakterze przypadkowym lub naturalnym, nie do uniknięcia lub nad którym człowiek nie panuje"
        }
      ];

      return source
}

export function detLang(keyword) {

    let entry
    let pl = false
    //let entry = {}
    let s = getSource()

    for (entry in s) {

          //console.log(s[entry]["keywords"]["pl"])
          if (  s[entry]["keywords"]["pl"].includes(keyword))

          {
            //console.log("found")
            pl = true
            break;
          }
    
    }

    return pl
}