import { Project } from "../types";

const BASE = "https://infrabau.at";

export const projects: Project[] = [
  // ─── LEITUNGSBAU ──────────────────────────────────────────────
  {
    slug: "a1-telekom-hws-alpenstrasse",
    title: "A1 Telekom – HWS Alpenstraße",
    category: "leitungsbau",
    location: "Stadt Salzburg",
    client: "A1 Telekom Austria AG",
    period: "2018",
    coverImage: `${BASE}/cache/resized/57d8c8f00a02463a02322db6f5ebf5a5.jpg`,
    images: [
      `${BASE}/cache/resized/57d8c8f00a02463a02322db6f5ebf5a5.jpg`,
      `${BASE}/images/005.jpg`,
    ],
    description:
      "Hochwasserschutz- und Entwässerungsmaßnahmen im Bereich der Alpenstraße in Salzburg. Verlegung von Schutzleitungen für die Telekommunikationsinfrastruktur sowie Entwässerungsarbeiten entlang der hochwassergefährdeten Trasse.",
    scope: [
      "Hochwasserschutz- und Entwässerungsmaßnahmen",
      "Leitungsverlegung und Schutzrohrverlegung",
      "Grabenbauarbeiten und Verfüllung",
      "Oberflächenwiederherstellung",
    ],
    featured: true,
  },
  {
    slug: "aba-bischofshofen-ba25-wva-ba26",
    title: "ABA Bischofshofen BA 25 und WVA BA 26",
    category: "leitungsbau",
    location: "Bischofshofen, Pongau",
    client: "Stadtgemeinde Bischofshofen",
    period: "2017–2018",
    coverImage: `${BASE}/cache/resized/7dc99630e4fc4f499d50373caab5f84e.jpg`,
    images: [
      `${BASE}/cache/resized/7dc99630e4fc4f499d50373caab5f84e.jpg`,
      `${BASE}/images/IMG_0873.jpg`,
    ],
    description:
      "Kanal-, Wasser- und Straßenbauarbeiten in Bischofshofen. Abwasserkanal Bauabschnitt 25 sowie Wasserversorgungsanlage Bauabschnitt 26 mit umfassenden Tiefbauarbeiten im Ortsgebiet.",
    scope: [
      "Abwasserkanal Bauabschnitt 25",
      "Wasserversorgungsanlage Bauabschnitt 26",
      "Straßenbauarbeiten und Asphaltierung",
      "Hausanschlüsse und Anbindungen",
    ],
  },
  {
    slug: "aufschliessung-inkoba-lengau",
    title: "Aufschließung BB Inkoba, Lengau",
    category: "leitungsbau",
    location: "Lengau, Flachgau",
    client: "Betriebsbaugebiet Inkoba GmbH",
    period: "2016",
    coverImage: `${BASE}/cache/resized/3e8d811f18b62bf40f00a239f39484ec.jpg`,
    images: [
      `${BASE}/cache/resized/3e8d811f18b62bf40f00a239f39484ec.jpg`,
      `${BASE}/images/Inkoba-Lengau-4.jpg`,
    ],
    description:
      "Erschließung des Betriebsbaugebiets Inkoba in Lengau mit Gehsteig und Entwässerungsanlagen. Komplette infrastrukturelle Aufschließung des Gewerbegebiets inklusive Kanal, Wasser und Straßenbau.",
    scope: [
      "Erschließungsstraße mit Gehsteig",
      "Entwässerungsanlagen und Versickerung",
      "Wasserleitung und Kanal",
      "Beleuchtung und Straßenausstattung",
    ],
  },
  {
    slug: "wva-radstadt-ba02",
    title: "WVA RADSTADT BA 02",
    category: "leitungsbau",
    location: "Radstadt, Pongau",
    client: "Stadtgemeinde Radstadt",
    period: "2019",
    coverImage: `${BASE}/images/wva-radstadt/wva-radstadt3.jpg`,
    images: [
      `${BASE}/images/wva-radstadt/wva-radstadt3.jpg`,
    ],
    description:
      "Wasserversorgungsanlage Bauabschnitt 02 in Radstadt. Erneuerung und Erweiterung der Trinkwasserversorgungsinfrastruktur im Stadtgebiet.",
    scope: [
      "Trinkwasserleitung DN100–DN200",
      "Hausanschlüsse und Absperrarmaturen",
      "Druckprüfung und Desinfektion",
      "Oberflächenwiederherstellung",
    ],
  },
  {
    slug: "kanal-gruenwaldkopf-obertauern",
    title: "Kanal Grünwaldkopf, Obertauern",
    category: "leitungsbau",
    location: "Obertauern, Pongau",
    client: "Marktgemeinde Untertauern",
    period: "2020",
    coverImage: `${BASE}/images/IMG_6272-einleitungsbild.jpg`,
    images: [
      `${BASE}/images/IMG_6272-einleitungsbild.jpg`,
    ],
    description:
      "Kanalverlegung an der Talstation Grünwaldkopf in Obertauern. Arbeiten im hochalpinen Gelände mit besonderer Berücksichtigung des Naturschutzes.",
    scope: [
      "Kanalverlegung im Hochgebirge",
      "Schächte und Einlaufbauwerke",
      "Naturschutzgerechte Bauausführung",
      "Geländewiederherstellung",
    ],
  },
  {
    slug: "aba-wva-palting-ba02",
    title: "ABA & WVA Palting BA 02",
    category: "leitungsbau",
    location: "Palting, Flachgau",
    client: "Marktgemeinde Straßwalchen",
    period: "2019",
    coverImage: `${BASE}/images/Palting-1.jpg`,
    images: [
      `${BASE}/images/Palting-1.jpg`,
    ],
    description:
      "Infrastrukturerschließung in Palting, Bauabschnitt 02. Abwasserkanal und Wasserversorgungsanlage für das Wohngebiet.",
    scope: [
      "Abwasserkanal DN250–DN400",
      "Wasserversorgungsleitung DN100",
      "Entwässerungsschächte und Armaturen",
      "Straßenwiederherstellung",
    ],
  },
  {
    slug: "aufschliessung-zehmemoos-buermoos",
    title: "Aufschließung Zehmemoos, Bürmoos",
    category: "leitungsbau",
    location: "Bürmoos, Flachgau",
    client: "Marktgemeinde Bürmoos",
    period: "2018",
    coverImage: `${BASE}/images/B%C3%BCrmoos-Zehmemoos-2.jpg`,
    images: [
      `${BASE}/images/B%C3%BCrmoos-Zehmemoos-2.jpg`,
    ],
    description:
      "Erschließung des Wohngebiets Zehmemoos in Bürmoos mit Kanal, Wasser und Straße. Neue Wohnstraße inklusive vollständiger Ver- und Entsorgungsinfrastruktur.",
    scope: [
      "Erschließungsstraße mit Entwässerung",
      "Abwasserkanal und Wasserleitung",
      "Hausanschlüsse",
      "Asphaltierung und Randstein",
    ],
  },
  {
    slug: "radstadt-v-suedtirolersiedlung",
    title: "Radstadt V – Südtirolersiedlung",
    category: "leitungsbau",
    location: "Radstadt, Pongau",
    client: "Stadtgemeinde Radstadt",
    period: "2017",
    coverImage: `${BASE}/images/IMG_0873.jpg`,
    images: [
      `${BASE}/images/IMG_0873.jpg`,
    ],
    description:
      "Kanalumlegungen im Bereich der Südtirolersiedlung Radstadt. Sanierung und Erneuerung des bestehenden Kanalsystems.",
    scope: [
      "Kanalumlegungen und -sanierungen",
      "Schachtbauarbeiten",
      "Hausanschlüsse und Anbindungen",
    ],
  },
  {
    slug: "hallwang-rw-kanal-tuffernstrasse",
    title: "HALLWANG – RW-Kanal Tuffernstraße",
    category: "leitungsbau",
    location: "Hallwang, Flachgau",
    client: "Gemeindewerke Hallwang",
    period: "2021",
    coverImage: `${BASE}/images/wva-stveit/wva-stveit.jpg`,
    images: [
      `${BASE}/images/wva-stveit/wva-stveit.jpg`,
    ],
    description:
      "Regenwasserkanal und Netzausbau entlang der Tuffernstraße in Hallwang. Erweiterung des Regenwassernetzes für das Siedlungsgebiet.",
    scope: [
      "Regenwasserkanal DN400–DN600",
      "Einlaufschächte und Sickerschächte",
      "Netzausbau und Querungen",
    ],
  },
  {
    slug: "kanalsanierung-huettau-2013",
    title: "KANALSANIERUNG 2013 HÜTTAU",
    category: "leitungsbau",
    location: "Hüttau, Pongau",
    client: "Marktgemeinde St. Johann im Pongau",
    period: "2013",
    coverImage: `${BASE}/images/005.jpg`,
    images: [
      `${BASE}/images/005.jpg`,
    ],
    description:
      "Kanalsanierung im Ortsgebiet Hüttau. Erneuerung des veralteten Kanalnetzes und Wiederherstellung der Funktionssicherheit.",
    scope: [
      "Kanalsanierung und -erneuerung",
      "Schachtbauarbeiten",
      "Kanalfernsehuntersuchung",
      "Oberflächenwiederherstellung",
    ],
  },
  {
    slug: "kanalsanierung-seekarhaus-obertauern",
    title: "Kanalsanierung Seekarhaus, Obertauern",
    category: "leitungsbau",
    location: "Obertauern, Pongau",
    client: "Seekarhaus Obertauern",
    period: "2022",
    coverImage: `${BASE}/images/IMG_6272-einleitungsbild.jpg`,
    images: [
      `${BASE}/images/IMG_6272-einleitungsbild.jpg`,
    ],
    description:
      "Rohrsanierungsarbeiten für das Seekarhaus in Obertauern im Hochgebirge. Grabungslose Sanierungsverfahren zum Schutz des alpinen Geländes.",
    scope: [
      "Rohrsanierung grabungslos",
      "Inspektion und Dokumentation",
      "Geländewiederherstellung",
    ],
  },

  // ─── BETONBAU ─────────────────────────────────────────────────
  {
    slug: "containerschulanlage-radstadt",
    title: "Containerschulanlage Schulzentrum Radstadt",
    category: "betonbau",
    location: "Radstadt, Pongau",
    client: "Land Salzburg – Hochbau",
    period: "2016",
    coverImage: `${BASE}/images/containerschule/containerschule.jpg`,
    images: [
      `${BASE}/images/containerschule/containerschule.jpg`,
    ],
    description:
      "Fundierung und infrastrukturelle Erschließung der temporären Containerschulanlage am Schulzentrum Radstadt während der Umbauphase des Hauptgebäudes.",
    scope: [
      "Fundierung der Containerschulanlage",
      "Infrastrukturelle Aufschließung",
      "Kanal, Wasser und Strom",
      "Zufahrtsgestaltung",
    ],
    featured: true,
  },
  {
    slug: "erneuerung-ennsbruecke-radstadt",
    title: "Erneuerung Ennsbrücke Radstadt",
    category: "betonbau",
    location: "Radstadt, Pongau",
    client: "Land Salzburg – Straßenbau",
    period: "2018",
    coverImage: `${BASE}/images/ennsbruecke/116.jpg`,
    images: [
      `${BASE}/images/ennsbruecke/116.jpg`,
    ],
    description:
      "Brückenneubau und Gehsteigerrichtung an der Ennsbrücke in Radstadt. Stahlbetonkonstruktion mit Spannbetonüberbau über die Enns.",
    scope: [
      "Brückenkonstruktion in Stahlbeton",
      "Gehsteigerrichtung beidseitig",
      "Widerlager und Gründung",
      "Geländer und Brückenausstattung",
    ],
  },
  {
    slug: "motion06-lengau",
    title: "MOTION06 Lengau",
    category: "betonbau",
    location: "Lengau, Flachgau",
    client: "MOTION06 GmbH",
    period: "2015",
    coverImage: `${BASE}/images/motion06/motion-06-2.jpg`,
    images: [
      `${BASE}/images/motion06/motion-06-2.jpg`,
    ],
    description:
      "Erd- und Baumeisterarbeiten für Bürogebäude und Produktionshalle in Lengau. Komplette Tiefbauerschließung und Betonarbeiten für den Neubau.",
    scope: [
      "Erd- und Aushubarbeiten",
      "Fundamentplatten und Bodenplatten",
      "Baumeisterarbeiten",
      "Entwässerung und Erschließung",
    ],
  },
  {
    slug: "a1-west-autobahn-betonleitwaende",
    title: "A1 Westautobahn – Betonleitwände km 276",
    category: "betonbau",
    location: "A1 Westautobahn",
    client: "ASFINAG",
    period: "2020",
    coverImage: `${BASE}/images/Sanierung-Rundsockel-5.jpg`,
    images: [
      `${BASE}/images/Sanierung-Rundsockel-5.jpg`,
    ],
    description:
      "Auf- und Abbau von Betonleitwänden auf der A1 Westautobahn bei Streckenkilometer 276,72 bis 275,51 im Rahmen von Straßenerneuerungsarbeiten.",
    scope: [
      "Auf- und Abbau Betonleitwände",
      "Streckenabsicherung",
      "Betonarbeiten und Montage",
    ],
  },
  {
    slug: "a10-parkplatz-hohenwerfen",
    title: "A10 Tauernautobahn – Parkplatzertüchtigung Hohenwerfen",
    category: "betonbau",
    location: "Hohenwerfen, Pongau",
    client: "ASFINAG",
    period: "2021",
    coverImage: `${BASE}/images/005.jpg`,
    images: [
      `${BASE}/images/005.jpg`,
    ],
    description:
      "Ertüchtigung der Parkplatzanlage Hohenwerfen an der A10 Tauernautobahn. Betonarbeiten und Oberflächensanierung der Rastanlage.",
    scope: [
      "Betonarbeiten Parkplatzfläche",
      "Entwässerung und Gefälle",
      "Fahrbahnmarkierungen",
      "Randsteine und Ausstattung",
    ],
  },

  // ─── FREILEITUNGSBAU ──────────────────────────────────────────
  {
    slug: "380kv-limbergleitung-uw-kaprun",
    title: "380/110-kV-Limbergleitung – UW Kaprun",
    category: "freileitungsbau",
    location: "Kaprun, Pinzgau",
    client: "APG – Austrian Power Grid",
    period: "2020–2022",
    volume: "2,8 Mio. €",
    coverImage: `${BASE}/images/apg-kaprun/apg-kaprun9.jpg`,
    images: [
      `${BASE}/images/apg-kaprun/apg-kaprun9.jpg`,
    ],
    description:
      "Fundierungsarbeiten für die 380/110-kV-Limbergleitung im Bereich des Umspannwerks Kaprun. Mastgründungen im alpinen Gelände des Pinzgaus.",
    scope: [
      "Mastfundierungsarbeiten im Hochgebirge",
      "Bohrpfahlgründungen und Plattentype",
      "Zufahrtsherstellung und Rückbau",
      "Geländewiederherstellung",
    ],
    featured: true,
  },
  {
    slug: "apg-wald-pinzgau",
    title: "APG Wald/Pinzgau – Standortsicherung",
    category: "freileitungsbau",
    location: "Wald im Pinzgau",
    client: "APG – Austrian Power Grid",
    period: "2019",
    coverImage: `${BASE}/images/apg-wald-pinzgau/apg-wald-pinzgau.jpg`,
    images: [
      `${BASE}/images/apg-wald-pinzgau/apg-wald-pinzgau.jpg`,
    ],
    description:
      "Standortsicherung sowie Hangsicherung mittels Spritzbeton und IBO-Anker im Bereich von Freileitungsmasten des APG im Pinzgau.",
    scope: [
      "Standortsicherung Maststandort",
      "Hangsicherung mit Spritzbeton",
      "IBO-Anker und Systemverankerung",
      "Böschungsarbeiten",
    ],
  },
  {
    slug: "110kv-einbindung-ybbsfeld-ii",
    title: "110-kV-Leitung Einbindung Ybbsfeld II",
    category: "freileitungsbau",
    location: "Ybbsfeld, Niederösterreich",
    client: "EVN AG",
    period: "2018",
    coverImage: `${BASE}/images/evn-ybbsfeld/evn-ybbsfeld2.jpg`,
    images: [
      `${BASE}/images/evn-ybbsfeld/evn-ybbsfeld2.jpg`,
    ],
    description:
      "Fundierungsarbeiten für die 110-kV-Leitungseinbindung Ybbsfeld II in Niederösterreich.",
    scope: [
      "Mastfundierungen",
      "Erd- und Betonarbeiten",
      "Zuwegungsarbeiten",
    ],
  },
  {
    slug: "110kv-bsl-st-johann-uttendorf",
    title: "110-kV-BSL St. Johann – Uttendorf M242–M262",
    category: "freileitungsbau",
    location: "Pongau / Pinzgau",
    client: "ÖBB Infrastruktur AG",
    period: "2017",
    coverImage: `${BASE}/images/oebb-bsl-uttendorf/oebb-bsl-uttendorf2.jpg`,
    images: [
      `${BASE}/images/oebb-bsl-uttendorf/oebb-bsl-uttendorf2.jpg`,
    ],
    description:
      "Fundierungsarbeiten für Bahnstromleitung 110 kV zwischen St. Johann und Uttendorf, Mast 242 bis 262.",
    scope: [
      "Mastfundierungen M242–M262",
      "Bohrpfahlgründungen",
      "Gebirgsgelände-Erschließung",
    ],
  },
  {
    slug: "110kv-schwarzach-klammstein",
    title: "110-kV-Leitung Schwarzach – Klammstein M185–M197",
    category: "freileitungsbau",
    location: "Gasteinertal, Pongau",
    client: "Salzburg AG",
    period: "2016",
    coverImage: `${BASE}/images/sag-klammstein/sag-klammstein.jpg`,
    images: [
      `${BASE}/images/sag-klammstein/sag-klammstein.jpg`,
    ],
    description:
      "Fundierungsarbeiten für die 110-kV-Leitung Schwarzach–Klammstein, Mast 185 bis 197 im Gasteinertal.",
    scope: [
      "Mastfundierungen M185–M197",
      "Betonierarbeiten im Gebirge",
      "Zufahrtsherstellung",
    ],
  },
  {
    slug: "mastfundierung-bsl-lend",
    title: "Mastfundierung BSL Lend",
    category: "freileitungsbau",
    location: "Lend, Pongau",
    client: "Salzburg AG",
    period: "2019",
    coverImage: `${BASE}/images/Mastfundierung-Lend-2.jpg`,
    images: [
      `${BASE}/images/Mastfundierung-Lend-2.jpg`,
    ],
    description:
      "Mastfundierungsarbeiten für die Bahnstromleitung in Lend.",
    scope: [
      "Mastfundierungen",
      "Erdarbeiten und Betonage",
      "Geländewiederherstellung",
    ],
  },
  {
    slug: "evn-bruck-leitha",
    title: "EVN Bruck/Leitha – Mastfundierungen",
    category: "freileitungsbau",
    location: "Bruck an der Leitha, Niederösterreich",
    client: "EVN AG",
    period: "2018",
    coverImage: `${BASE}/images/Mastfundierung-EVN-Bruck-1.jpg`,
    images: [
      `${BASE}/images/Mastfundierung-EVN-Bruck-1.jpg`,
    ],
    description:
      "Mastfundierungsarbeiten für das EVN-Netz im Raum Bruck an der Leitha.",
    scope: [
      "Mastfundierungen",
      "Betonierarbeiten",
      "Zuwegungsarbeiten",
    ],
  },
  {
    slug: "110kv-st-peter-braunau-ranshofen",
    title: "110-kV-Leitung 184/1,2 St.Peter–Braunau–Ranshofen",
    category: "freileitungsbau",
    location: "Innviertel, Oberösterreich",
    client: "APG – Austrian Power Grid",
    period: "2015",
    coverImage: `${BASE}/images/apg-kaprun/apg-kaprun9.jpg`,
    images: [
      `${BASE}/images/apg-kaprun/apg-kaprun9.jpg`,
    ],
    description:
      "Fundierungsarbeiten für die 110-kV-Leitung 184/1,2 zwischen St.Peter, Braunau und Ranshofen im Innviertel.",
    scope: [
      "Mastfundierungen",
      "Erd- und Betonarbeiten",
      "Infrastrukturelle Erschließung",
    ],
  },
  {
    slug: "110kv-reisseck-landskron",
    title: "110-kV-Leitung 111/1, 3A, 3B Reißeck–Landskron",
    category: "freileitungsbau",
    location: "Kärnten",
    client: "APG – Austrian Power Grid",
    period: "2016",
    coverImage: `${BASE}/images/sag-klammstein/sag-klammstein.jpg`,
    images: [
      `${BASE}/images/sag-klammstein/sag-klammstein.jpg`,
    ],
    description:
      "Fundierungsarbeiten für die 110-kV-Leitung zwischen Reißeck und Landskron in Kärnten.",
    scope: [
      "Mastfundierungen im Hochgebirge",
      "Bohrpfahlgründungen",
      "Geländewiederherstellung",
    ],
  },
  {
    slug: "apg-fundamentsanierungen-2013",
    title: "APG-Fundamentsanierungen 2013",
    category: "freileitungsbau",
    location: "Österreich",
    client: "APG – Austrian Power Grid",
    period: "2013",
    coverImage: `${BASE}/images/Sanierung-Rundsockel-5.jpg`,
    images: [
      `${BASE}/images/Sanierung-Rundsockel-5.jpg`,
      `${BASE}/cache/resized/c69bb274c3f7d2ea49cde493491b3417.jpg`,
    ],
    description:
      "Sanierung von Freileitungsfundamenten (Rundsockel) der Austrian Power Grid an mehreren Standorten in Österreich.",
    scope: [
      "Fundamentsanierung Rundsockel",
      "Betonreparatur nach ÖNORM EN 1504",
      "Hydrophobierung und Beschichtung",
      "Qualitätssicherung und Dokumentation",
    ],
  },

  // ─── ERDBAU / HANGSICHERUNG ───────────────────────────────────
  {
    slug: "aussenanlage-raika-friedburg",
    title: "Außenanlage Raika Friedburg, Lengau",
    category: "erdbau-hangsicherung",
    location: "Lengau, Flachgau",
    client: "Raiffeisenbank Friedburg",
    period: "2016",
    coverImage: `${BASE}/images/Au%C3%9Fenanlage_Raika_Friedburg/Raika-Friedburg-2.jpg`,
    images: [
      `${BASE}/images/Au%C3%9Fenanlage_Raika_Friedburg/Raika-Friedburg-2.jpg`,
    ],
    description:
      "Pflasterung und Asphaltierung der Außenanlage der Raiffeisenkasse Friedburg in Lengau. Gestaltung der Außenbereiche inklusive Parkierung und Zufahrten.",
    scope: [
      "Pflasterung und Belagsarbeiten",
      "Asphaltierung Zufahrt und Parkplatz",
      "Randsteine und Entwässerung",
      "Begrünung und Abschlussarbeiten",
    ],
  },
  {
    slug: "sanierung-josef-moosbrucker-weg",
    title: "Sanierung Josef-Moosbrucker-Weg",
    category: "erdbau-hangsicherung",
    location: "Stadt Salzburg",
    client: "Stadtgemeinde Salzburg",
    period: "2017",
    coverImage: `${BASE}/images/006.jpg`,
    images: [
      `${BASE}/images/006.jpg`,
    ],
    description:
      "Straßenneubau mit Geotextilverbau am Josef-Moosbrucker-Weg in Salzburg. Erneuerung und Stabilisierung des Straßenuntergrunds mittels Geotextileinlagen.",
    scope: [
      "Straßenneubau mit Aufbau",
      "Geotextilverbau zur Untergrundstabilisierung",
      "Entwässerung und Unterbau",
      "Asphaltierung",
    ],
    featured: true,
  },
  {
    slug: "hangsicherung-buchberg-bischofshofen",
    title: "Hangsicherung Buchberg, Bischofshofen",
    category: "erdbau-hangsicherung",
    location: "Bischofshofen, Pongau",
    client: "Stadtgemeinde Bischofshofen",
    period: "2018",
    coverImage: `${BASE}/images/IMG_0484.jpg`,
    images: [
      `${BASE}/images/IMG_0484.jpg`,
    ],
    description:
      "Sanierung der Böschung Buchberg mittels Raumgitterwand. Hangsicherung in Bischofshofen zur dauerhaften Stabilisierung der Böschung.",
    scope: [
      "Raumgitterwand zur Hangsicherung",
      "Erdarbeiten und Aushub",
      "Begrünung und Rekultivierung",
    ],
  },
  {
    slug: "apg-groebing-boeschungssicherung",
    title: "APG Gröbming – Böschungssicherung",
    category: "erdbau-hangsicherung",
    location: "Gröbming, Steiermark",
    client: "APG – Austrian Power Grid",
    period: "2016",
    coverImage: `${BASE}/cache/resized/569a491abba0ba2fb69ea89c141dc171.jpg`,
    images: [
      `${BASE}/cache/resized/569a491abba0ba2fb69ea89c141dc171.jpg`,
      `${BASE}/images/B%C3%B6schungssicherung-4.jpg`,
    ],
    description:
      "Rostfundamentsanierung und Böschungssicherung mittels Ankerplatten und Erdnägeln an einem APG-Maststandort in Gröbming.",
    scope: [
      "Rostfundamentsanierung",
      "Böschungssicherung mit Ankerplatten",
      "Erdnagelungen",
      "Geländewiederherstellung",
    ],
  },
  {
    slug: "lash-lift-lengau",
    title: "LASH & LIFT Lengau",
    category: "erdbau-hangsicherung",
    location: "Lengau, Flachgau",
    client: "LASH & LIFT GmbH",
    period: "2019",
    coverImage: `${BASE}/cache/resized/569a491abba0ba2fb69ea89c141dc171.jpg`,
    images: [
      `${BASE}/cache/resized/569a491abba0ba2fb69ea89c141dc171.jpg`,
    ],
    description:
      "Erdbauarbeiten und Geländeherstellung für das Bauvorhaben LASH & LIFT in Lengau.",
    scope: [
      "Erdbau und Aushub",
      "Geländemodellierung",
      "Verdichtungsnachweis",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
