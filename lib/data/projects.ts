import { Project } from "../types";

export const projects: Project[] = [
  // LEITUNGSBAU
  {
    slug: "wasserversorgung-radstadt",
    title: "Wasserversorgung Radstadt – Erneuerung Hauptleitung DN200",
    category: "leitungsbau",
    location: "Radstadt, Salzburg",
    client: "Stadtgemeinde Radstadt",
    volume: "1,2 Mio. €",
    period: "2023",
    coverImage: "https://picsum.photos/seed/pipe-radstadt/800/600",
    images: [
      "https://picsum.photos/seed/pipe-radstadt/1200/800",
      "https://picsum.photos/seed/pipe-radstadt2/1200/800",
      "https://picsum.photos/seed/pipe-radstadt3/1200/800",
    ],
    description:
      "Erneuerung der Trinkwasserhauptleitung im Stadtzentrum Radstadt. Die veraltete Gusseisenleitung wurde durch eine moderne HDPE-Druckleitung DN200 ersetzt. Die Arbeiten erfolgten in enger Abstimmung mit der Stadtgemeinde, um die Versorgungssicherheit während der gesamten Bauphase zu gewährleisten.",
    scope: [
      "Offene Grabenbauweise im Stadtzentrum",
      "HDPE-Druckleitung DN200, L=1.850 m",
      "Einbindung bestehender Hausanschlüsse",
      "Asphaltierung und Oberflächenwiederherstellung",
    ],
    featured: true,
  },
  {
    slug: "trinkwassernetz-hallwang",
    title: "Trinkwassernetz Hallwang – Erweiterung Siedlungsgebiet",
    category: "leitungsbau",
    location: "Hallwang, Salzburg",
    client: "Gemeindewerke Hallwang",
    volume: "780.000 €",
    period: "2022–2023",
    coverImage: "https://picsum.photos/seed/pipe-hallwang/800/600",
    images: [
      "https://picsum.photos/seed/pipe-hallwang/1200/800",
      "https://picsum.photos/seed/pipe-hallwang2/1200/800",
    ],
    description:
      "Erweiterung des Trinkwassernetzes für das neu erschlossene Siedlungsgebiet Hallwang-Süd. Verlegung von Hauptleitungen und Hausanschlüssen für 120 Wohneinheiten.",
    scope: [
      "Hauptleitung DN150, L=2.200 m",
      "Hausanschlüsse für 120 Einheiten",
      "Druckprüfung und Spülung",
      "Oberflächen-wiederherstellung",
    ],
  },
  {
    slug: "ortskanalsanierung-huettau",
    title: "Ortskanalsanierung Hüttau – Hauptsammler",
    category: "leitungsbau",
    location: "Hüttau, Pongau",
    client: "Marktgemeinde St. Johann im Pongau",
    volume: "940.000 €",
    period: "2023",
    coverImage: "https://picsum.photos/seed/kanal-huettau/800/600",
    images: [
      "https://picsum.photos/seed/kanal-huettau/1200/800",
      "https://picsum.photos/seed/kanal-huettau2/1200/800",
    ],
    description:
      "Sanierung und Erneuerung des Ortshauptkanals in Hüttau. Erneuerung des Schmutzwassersammlers und Neubau einer modernen Druckrohranleitung.",
    scope: [
      "Schmutzwassersammler DN400, L=1.600 m",
      "Schächte und Einlaufbauwerke",
      "Kanalfernsehuntersuchung",
      "Anbindung Nebenstraßen",
    ],
  },
  {
    slug: "wasserleitung-abtenau",
    title: "Wasserleitung Abtenau – Quellzuführung",
    category: "leitungsbau",
    location: "Abtenau, Tennengau",
    client: "Marktgemeinde Abtenau",
    volume: "620.000 €",
    period: "2022",
    coverImage: "https://picsum.photos/seed/pipe-abtenau/800/600",
    images: [
      "https://picsum.photos/seed/pipe-abtenau/1200/800",
      "https://picsum.photos/seed/pipe-abtenau2/1200/800",
    ],
    description:
      "Neubau einer Quellzuführungsleitung zur Sicherstellung der Trinkwasserversorgung. Die Leitung verläuft überwiegend in unwegsamem Gelände im Bereich der Dachstein-Westabdachung.",
    scope: [
      "Druckrohrleitung DN100, L=3.400 m",
      "Gebirgsgelände-Erschließung",
      "Quellfassung und Einbauschacht",
      "Druckprüfung und Inbetriebnahme",
    ],
  },
  {
    slug: "abwassernetz-thalgau",
    title: "Abwassernetz Thalgau – Druckleitung",
    category: "leitungsbau",
    location: "Thalgau, Flachgau",
    client: "Marktgemeinde Thalgau",
    volume: "550.000 €",
    period: "2022",
    coverImage: "https://picsum.photos/seed/pipe-thalgau/800/600",
    images: ["https://picsum.photos/seed/pipe-thalgau/1200/800"],
    description:
      "Bau einer Abwasserdruckleitung zur Anbindung des Ortsteils Wiesenhof an die zentrale Kläranlage.",
    scope: [
      "PE-Druckleitung DN80, L=2.100 m",
      "Pumpstation mit Doppelpumpenanlage",
      "Elektroanschluss und Fernüberwachung",
    ],
  },
  {
    slug: "trinkwasser-mattsee",
    title: "Trinkwasserversorgung Mattsee – Ortsnetz",
    category: "leitungsbau",
    location: "Mattsee, Flachgau",
    client: "Marktgemeinde Mattsee",
    volume: "870.000 €",
    period: "2021–2022",
    coverImage: "https://picsum.photos/seed/pipe-mattsee/800/600",
    images: ["https://picsum.photos/seed/pipe-mattsee/1200/800"],
    description:
      "Erneuerung des gesamten Ortsnetzes der Trinkwasserversorgung Mattsee. Ersatz der bestehenden AC-Leitungen durch moderne HDPE-Rohrsysteme.",
    scope: [
      "HDPE-Ortsnetz DN80–DN150, L=3.800 m",
      "Rund 280 Hausanschlüsse",
      "Neue Absperrarmaturen und Hydranten",
    ],
  },
  {
    slug: "abwasserkanal-elixhausen",
    title: "Abwasserkanal Elixhausen – Trennsystem",
    category: "leitungsbau",
    location: "Elixhausen, Flachgau",
    client: "Gemeindewerke Elixhausen",
    volume: "690.000 €",
    period: "2021",
    coverImage: "https://picsum.photos/seed/kanal-elixhausen/800/600",
    images: ["https://picsum.photos/seed/kanal-elixhausen/1200/800"],
    description:
      "Umbau des bestehenden Mischsystems auf ein zeitgemäßes Trennsystem in Elixhausen-Ort.",
    scope: [
      "Schmutzwasserkanal DN300, L=1.900 m",
      "Regenwasserkanal DN400, L=1.700 m",
      "Oberflächenentwässerung und Einlaufschächte",
    ],
  },
  {
    slug: "wasserleitung-seekirchen",
    title: "Wasserleitung Seekirchen – Drucksteigerungsanlage",
    category: "leitungsbau",
    location: "Seekirchen, Flachgau",
    client: "Stadtgemeinde Seekirchen",
    volume: "430.000 €",
    period: "2021",
    coverImage: "https://picsum.photos/seed/pipe-seekirchen/800/600",
    images: ["https://picsum.photos/seed/pipe-seekirchen/1200/800"],
    description:
      "Neubau einer Drucksteigerungsanlage inkl. Zuleitungsleitung zur Verbesserung des Versorgungsdrucks im Höhengebiet.",
    scope: [
      "Drucksteigerungsstation mit 3 Pumpen",
      "Zulaufleitung DN100, L=950 m",
      "Steuerschrank und Fernüberwachung",
    ],
  },
  {
    slug: "kanalisation-anif",
    title: "Kanalisation Anif – Erweiterung Gewerbegebiet",
    category: "leitungsbau",
    location: "Anif, Tennengau",
    client: "Gemeindewerke Anif",
    volume: "760.000 €",
    period: "2020–2021",
    coverImage: "https://picsum.photos/seed/kanal-anif/800/600",
    images: ["https://picsum.photos/seed/kanal-anif/1200/800"],
    description:
      "Erweiterung der Ortskanalisation für das neue Gewerbegebiet Anif-Ost inkl. Pumpstation.",
    scope: [
      "Schmutzwasserkanal DN300–DN500, L=2.400 m",
      "Schmutzwasserpumpstation",
      "Druckleitung DN100, L=800 m",
    ],
  },
  {
    slug: "wasserleitung-koestendorf",
    title: "Trinkwasserleitung Köstendorf – Hochbehälteranbindung",
    category: "leitungsbau",
    location: "Köstendorf, Flachgau",
    client: "Gemeinde Köstendorf",
    volume: "380.000 €",
    period: "2020",
    coverImage: "https://picsum.photos/seed/pipe-koestendorf/800/600",
    images: ["https://picsum.photos/seed/pipe-koestendorf/1200/800"],
    description:
      "Anbindung des neuen Hochbehälters an das bestehende Versorgungsnetz.",
    scope: [
      "Druckleitung DN100, L=1.200 m",
      "Hochbehälter-Einbindung",
      "Druckprüfung und Desinfektion",
    ],
  },
  {
    slug: "pumpstation-neumarkt",
    title: "Abwasserpumpstation Neumarkt – Neubau",
    category: "leitungsbau",
    location: "Neumarkt am Wallersee, Flachgau",
    client: "Stadtgemeinde Neumarkt",
    volume: "510.000 €",
    period: "2023",
    coverImage: "https://picsum.photos/seed/pump-neumarkt/800/600",
    images: ["https://picsum.photos/seed/pump-neumarkt/1200/800"],
    description:
      "Neubau einer leistungsstarken Abwasserpumpstation mit vollautomatischer Steuerung.",
    scope: [
      "Pumpenschacht D=3,0 m, T=6,5 m",
      "4 Tauchmotorpumpen à 18 kW",
      "SPS-Steuerung mit GSM-Fernwirk",
    ],
  },
  {
    slug: "wasserversorgung-lamprechtshausen",
    title: "Wasserversorgung Lamprechtshausen – Netzerneuerung",
    category: "leitungsbau",
    location: "Lamprechtshausen, Flachgau",
    client: "Marktgemeinde Lamprechtshausen",
    volume: "650.000 €",
    period: "2024",
    coverImage: "https://picsum.photos/seed/pipe-lamprecht/800/600",
    images: ["https://picsum.photos/seed/pipe-lamprecht/1200/800"],
    description:
      "Erneuerung der veralteten Grauguss-Leitungen im Ortskern durch moderne HDPE-Rohrsysteme.",
    scope: [
      "HDPE-Ortsnetz DN100–DN200, L=3.200 m",
      "Hausanschlüsse für 190 Einheiten",
      "Gesamtdruckprüfung und Spülung",
    ],
  },

  // BETONBAU
  {
    slug: "schulkomplex-salzburg",
    title: "Schulkomplex BG Salzburg – Neubau Sporthalle",
    category: "betonbau",
    location: "Salzburg-Maxglan",
    client: "Land Salzburg – Hochbau",
    volume: "2,8 Mio. €",
    period: "2022–2023",
    coverImage: "https://picsum.photos/seed/beton-schule/800/600",
    images: [
      "https://picsum.photos/seed/beton-schule/1200/800",
      "https://picsum.photos/seed/beton-schule2/1200/800",
      "https://picsum.photos/seed/beton-schule3/1200/800",
    ],
    description:
      "Neubau einer dreifachteiligen Sporthalle als Stahlbetonkonstruktion. Tiefgründung mittels Bohrpfählen, Wandscheiben und Flachdecken in Ortbetonbauweise.",
    scope: [
      "Tiefgründung mit Bohrpfählen D=600 mm, L=12 m",
      "Stahlbetonkonstruktion, ca. 2.400 m³ Beton",
      "Fundamentplatten und Bodenplatten",
      "Treppenhäuser und Aufzugsschächte",
    ],
    featured: true,
  },
  {
    slug: "bruecke-lammerbachtal",
    title: "Brücke Lammerbachtal – Neubau B162",
    category: "betonbau",
    location: "Lammertal, Tennengau",
    client: "Land Salzburg – Straßenbau",
    volume: "1,9 Mio. €",
    period: "2021–2022",
    coverImage: "https://picsum.photos/seed/beton-bruecke/800/600",
    images: [
      "https://picsum.photos/seed/beton-bruecke/1200/800",
      "https://picsum.photos/seed/beton-bruecke2/1200/800",
    ],
    description:
      "Neubau einer Straßenbrücke als Spannbetonkonstruktion über den Lammerbach. Stützweite 42 m, Fahrbahnbreite 7,5 m.",
    scope: [
      "Spannbetonüberbau, Stützweite 42 m",
      "Brückenwiderlager in Stahlbeton",
      "Brückenkappe und Geländer",
      "Fahrbahn und Abdichtung",
    ],
  },
  {
    slug: "autobahn-a10-tunnelportale",
    title: "Autobahn A10 – Sanierung Tunnelportale",
    category: "betonbau",
    location: "A10 Tauernautobahn",
    client: "ASFINAG",
    volume: "1,1 Mio. €",
    period: "2022",
    coverImage: "https://picsum.photos/seed/beton-tunnel/800/600",
    images: [
      "https://picsum.photos/seed/beton-tunnel/1200/800",
      "https://picsum.photos/seed/beton-tunnel2/1200/800",
    ],
    description:
      "Betonreparatur und Instandsetzung von drei Tunnelportalen auf der A10. Schutzbetonaufbau, Risssanierung und Hydrophobierung.",
    scope: [
      "Betonreparatur nach ÖNORM EN 1504",
      "Spritzbeton und Reprofilierung",
      "Hydrophobierung und Beschichtung",
      "Randsteinarbeiten und Geländer",
    ],
  },
  {
    slug: "stuetzmauer-b158",
    title: "Stützmauer Bundesstraße B158 – Neubau",
    category: "betonbau",
    location: "Straßwalchen, Flachgau",
    client: "Land Salzburg – Straßenbau",
    volume: "680.000 €",
    period: "2021",
    coverImage: "https://picsum.photos/seed/beton-mauer/800/600",
    images: ["https://picsum.photos/seed/beton-mauer/1200/800"],
    description:
      "Neubau einer Winkelstützmauer zur Böschungssicherung entlang der B158.",
    scope: [
      "Winkelstützmauer H=3,5–6,5 m, L=180 m",
      "Ortbetonbauweise mit Schreitschalung",
      "Drainage und Hinterfüllung",
    ],
  },
  {
    slug: "unterfuehrung-b1",
    title: "Unterführung B1 Salzburg-Mitte – Sanierung",
    category: "betonbau",
    location: "Salzburg",
    client: "Stadtgemeinde Salzburg",
    volume: "450.000 €",
    period: "2020",
    coverImage: "https://picsum.photos/seed/beton-unterf/800/600",
    images: ["https://picsum.photos/seed/beton-unterf/1200/800"],
    description:
      "Generalsanierung einer Fußgängerunterführung unter der B1. Betonreparatur, neue Entwässerung und Beleuchtung.",
    scope: [
      "Betonreparatur Decke und Wände",
      "Neue Entwässerung und Gefälle",
      "Fliesen und Beschichtung",
      "Beleuchtung und Elektroinstallation",
    ],
  },

  // FREILEITUNGSBAU
  {
    slug: "380kv-salzburgleitung",
    title: "380-kV-Leitung Salzburgleitung – Mastfundamente",
    category: "freileitungsbau",
    location: "Salzburg / Oberösterreich",
    client: "APG – Austrian Power Grid",
    volume: "3,2 Mio. €",
    period: "2022–2024",
    coverImage: "https://picsum.photos/seed/freil-380kv/800/600",
    images: [
      "https://picsum.photos/seed/freil-380kv/1200/800",
      "https://picsum.photos/seed/freil-380kv2/1200/800",
      "https://picsum.photos/seed/freil-380kv3/1200/800",
    ],
    description:
      "Neubau der Mastfundamente für das Salzburgleitung-Projekt der APG. 47 Stahlgittermast-Fundamente im Großraum Salzburg und Oberösterreich.",
    scope: [
      "47 Mastfundamente (Stiefel- und Plattentype)",
      "Bohrpfähle bis D=1.200 mm und T=18 m",
      "Erdbau und Geländewiederherstellung",
      "Qualitätsprüfung nach ÖVE-Normen",
    ],
    featured: true,
  },
  {
    slug: "110kv-kaprun-bischofshofen",
    title: "110-kV-Leitung Kaprun–Bischofshofen",
    category: "freileitungsbau",
    location: "Pinzgau / Pongau",
    client: "Salzburg AG",
    volume: "1,8 Mio. €",
    period: "2021–2022",
    coverImage: "https://picsum.photos/seed/freil-110kv/800/600",
    images: [
      "https://picsum.photos/seed/freil-110kv/1200/800",
      "https://picsum.photos/seed/freil-110kv2/1200/800",
    ],
    description:
      "Gründungsarbeiten für 31 Freileitungsmasten entlang der 110-kV-Trasse Kaprun–Bischofshofen im alpinen Gelände.",
    scope: [
      "31 Mastfundamente in Hochgebirge",
      "Materialtransport per Hubschrauber",
      "Schalungs- und Betonierarbeiten",
      "Geländesicherung und Rekultivierung",
    ],
  },
  {
    slug: "mastfundamente-ooe-salzburg",
    title: "Mastfundamente OÖ-Salzburg-Grenzbereich",
    category: "freileitungsbau",
    location: "Trimmelkam / Braunau",
    client: "APG – Austrian Power Grid",
    volume: "1,4 Mio. €",
    period: "2023",
    coverImage: "https://picsum.photos/seed/freil-ooe/800/600",
    images: ["https://picsum.photos/seed/freil-ooe/1200/800"],
    description:
      "Fundamente für den Grenzabschnitt der 380-kV-Leitung zwischen Oberösterreich und Salzburg.",
    scope: [
      "22 Einzelfundamente",
      "Bohrpfahlgründung und Plattentype",
      "Zuwegungen und Baustraßen",
    ],
  },
  {
    slug: "freileitungsumbau-110kv-pinzgau",
    title: "Freileitungsumbau 110 kV Pinzgau",
    category: "freileitungsbau",
    location: "Pinzgau, Salzburg",
    client: "Salzburg AG",
    volume: "980.000 €",
    period: "2022",
    coverImage: "https://picsum.photos/seed/freil-pinzgau/800/600",
    images: ["https://picsum.photos/seed/freil-pinzgau/1200/800"],
    description:
      "Umbau und Erneuerung bestehender Maststandorte sowie Neugründung von 16 Masten.",
    scope: [
      "16 Mastfundamente Neubau",
      "Sanierung 8 Bestandsfundamente",
      "Erdarbeiten und Befestigung",
    ],
  },
  {
    slug: "mastgruendungen-380kv-tauernleitung",
    title: "Mastgründungen 380-kV-Tauernleitung",
    category: "freileitungsbau",
    location: "Pinzgau / Lungau",
    client: "APG – Austrian Power Grid",
    volume: "2,1 Mio. €",
    period: "2021–2023",
    coverImage: "https://picsum.photos/seed/freil-tauern/800/600",
    images: ["https://picsum.photos/seed/freil-tauern/1200/800"],
    description:
      "Gründungsarbeiten für 38 Hochspannungsmasten entlang der 380-kV-Tauernleitung durch den Nationalpark Hohe Tauern.",
    scope: [
      "38 Mastfundamente im Hochgebirge",
      "Bohrpfahlgründungen bis T=22 m",
      "Seilbahn-Transport für alpine Standorte",
      "Rekultivierung nach Naturschutzplan",
    ],
  },
  {
    slug: "110kv-tamsweg-murau",
    title: "110-kV-Leitung Tamsweg–Murau",
    category: "freileitungsbau",
    location: "Lungau / Murau",
    client: "Energie Steiermark",
    volume: "860.000 €",
    period: "2020–2021",
    coverImage: "https://picsum.photos/seed/freil-tamsweg/800/600",
    images: ["https://picsum.photos/seed/freil-tamsweg/1200/800"],
    description:
      "Mastfundamente für die grenzüberschreitende 110-kV-Trasse zwischen dem Lungau und der Steiermark.",
    scope: [
      "24 Mastfundamente",
      "Gebirgsgelände und Forststraßen",
      "Betonierarbeiten im Winterbetrieb",
    ],
  },
  {
    slug: "erdkabel-110kv-salzburg-nord",
    title: "Erdkabel 110 kV Salzburg-Nord",
    category: "freileitungsbau",
    location: "Salzburg-Nord",
    client: "Salzburg AG",
    volume: "720.000 €",
    period: "2022",
    coverImage: "https://picsum.photos/seed/freil-erdkabel/800/600",
    images: ["https://picsum.photos/seed/freil-erdkabel/1200/800"],
    description:
      "Tiefbauarbeiten für die Verkabelung eines 110-kV-Freileitungsabschnitts im Stadtgebiet Salzburg.",
    scope: [
      "Kabelgraben 2.200 m",
      "Kabelschutzrohre und Sandbett",
      "Schächte und Muffen-Schutzbauwerke",
      "Oberflächen-wiederherstellung",
    ],
  },
  {
    slug: "mastfundamente-innviertel",
    title: "Mastfundamente Innviertel – 380-kV-Ausbau",
    category: "freileitungsbau",
    location: "Innviertel, Oberösterreich",
    client: "APG – Austrian Power Grid",
    volume: "1,5 Mio. €",
    period: "2023–2024",
    coverImage: "https://picsum.photos/seed/freil-innviertel/800/600",
    images: ["https://picsum.photos/seed/freil-innviertel/1200/800"],
    description:
      "Gründung von 28 Hochspannungsmasten für den Netzausbau im Innviertel.",
    scope: [
      "28 Einzelfundamente (Stiefeltype)",
      "Bohrpfahlgründungen",
      "Baustraßen und Zufahrten",
    ],
  },
  {
    slug: "freileitungsneubau-kuchl-hallein",
    title: "Freileitungsneubau 110 kV Kuchl–Hallein",
    category: "freileitungsbau",
    location: "Tennengau, Salzburg",
    client: "Salzburg AG",
    volume: "640.000 €",
    period: "2020",
    coverImage: "https://picsum.photos/seed/freil-kuchl/800/600",
    images: ["https://picsum.photos/seed/freil-kuchl/1200/800"],
    description:
      "Neubau der Maststandorte für eine neue 110-kV-Teiltrasse im Tennengau.",
    scope: [
      "18 Mastfundamente",
      "Plattentype und Einzelfundamente",
      "Erdbau und Geländeherstellung",
    ],
  },
  {
    slug: "leitungsbau-tennengau",
    title: "Freileitungsprojekt Tennengau – Netzverstärkung",
    category: "freileitungsbau",
    location: "Tennengau, Salzburg",
    client: "Salzburg AG",
    volume: "570.000 €",
    period: "2021",
    coverImage: "https://picsum.photos/seed/freil-tenn/800/600",
    images: ["https://picsum.photos/seed/freil-tenn/1200/800"],
    description:
      "Gründungen für 14 neue Freileitunsmasten zur Netzverstärkung im mittleren Tennengau.",
    scope: [
      "14 Mastfundamente",
      "Erdarbeiten und Wegebau",
      "Schotter und Oberflächenarbeiten",
    ],
  },

  // ERDBAU / HANGSICHERUNG
  {
    slug: "felssicherung-gosautal",
    title: "Felssicherung Gosautal – Bundesstraße B166",
    category: "erdbau-hangsicherung",
    location: "Gosautal, Salzkammergut",
    client: "Land Salzburg / Oberösterreich",
    volume: "1,6 Mio. €",
    period: "2023",
    coverImage: "https://picsum.photos/seed/erd-gosau/800/600",
    images: [
      "https://picsum.photos/seed/erd-gosau/1200/800",
      "https://picsum.photos/seed/erd-gosau2/1200/800",
    ],
    description:
      "Sicherung einer großflächigen Felsböschung entlang der B166 im Gosautal nach Hangrutschung. Systemankerreihen, Spritzbeton und Steinschlagschutznetze.",
    scope: [
      "Systemanker L=6–12 m, 180 Stk.",
      "Spritzbeton C25/30, ca. 800 m²",
      "Steinschlagschutznetze und Abdecknetze",
      "Felsenräumung und Beräumung",
    ],
    featured: true,
  },
  {
    slug: "boeschungssicherung-a10",
    title: "Böschungssicherung A10 – Tauernautobahn",
    category: "erdbau-hangsicherung",
    location: "A10, Pinzgau",
    client: "ASFINAG",
    volume: "2,1 Mio. €",
    period: "2022–2023",
    coverImage: "https://picsum.photos/seed/erd-a10/800/600",
    images: [
      "https://picsum.photos/seed/erd-a10/1200/800",
      "https://picsum.photos/seed/erd-a10-2/1200/800",
    ],
    description:
      "Großflächige Böschungssicherung an der Tauernautobahn. Kombination aus Nagelwand, Spritzbeton und Bepflanzung.",
    scope: [
      "Nagelwand mit 340 Bodenankern",
      "Spritzbeton und Begrünung",
      "Entwässerungsbohrungen",
      "Vermessung und Monitoring",
    ],
  },
  {
    slug: "hangsicherung-b159",
    title: "Hangsicherung B159 – Salzachtal",
    category: "erdbau-hangsicherung",
    location: "Salzachtal, Pongau",
    client: "Land Salzburg",
    volume: "890.000 €",
    period: "2021",
    coverImage: "https://picsum.photos/seed/erd-salzach/800/600",
    images: ["https://picsum.photos/seed/erd-salzach/1200/800"],
    description:
      "Hangsicherung an einem kritischen Abschnitt der B159 nach Hochwasserereignis. Kombinierte Maßnahmen aus Erdnagelsystem und Auffangbauwerk.",
    scope: [
      "Erdnagelwand 85 m Länge",
      "Auffang- und Ableitelement",
      "Geotextil und Bepflanzung",
    ],
  },
  {
    slug: "gewerbepark-eugendorf",
    title: "Geländemodellierung Gewerbepark Eugendorf",
    category: "erdbau-hangsicherung",
    location: "Eugendorf, Flachgau",
    client: "Gewerbepark Eugendorf GmbH",
    volume: "720.000 €",
    period: "2020–2021",
    coverImage: "https://picsum.photos/seed/erd-eugendorf/800/600",
    images: ["https://picsum.photos/seed/erd-eugendorf/1200/800"],
    description:
      "Umfangreiche Erdbauarbeiten für die Erweiterung des Gewerbeparks Eugendorf: Abtrag, Planum und Erschließung.",
    scope: [
      "Bodenabtrag ca. 48.000 m³",
      "Geländemodellierung und Verdichtung",
      "Erschließungsstraßen und Planumsarbeiten",
      "Entwässerungsgräben",
    ],
  },
  {
    slug: "logistikzentrum-seekirchen",
    title: "Erdbauarbeiten Logistikzentrum Seekirchen",
    category: "erdbau-hangsicherung",
    location: "Seekirchen, Flachgau",
    client: "LZ Seekirchen Entwicklungs GmbH",
    volume: "540.000 €",
    period: "2023",
    coverImage: "https://picsum.photos/seed/erd-seekirchen/800/600",
    images: ["https://picsum.photos/seed/erd-seekirchen/1200/800"],
    description:
      "Erdbauarbeiten für den Neubau eines Logistikzentrums: Baugrubenherstellung, Planum und Geländeherstellung.",
    scope: [
      "Baugrubenherstellung ca. 12.000 m³",
      "Planum und Unterbau",
      "Auffüllung und Verdichtungsnachweis",
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
