import { Service } from "../types";

export const services: Service[] = [
  {
    slug: "leitungsbau",
    title: "Leitungsbau",
    shortTitle: "Leitungsbau",
    description: "Trink- und Abwasserleitungen, Kanalsysteme, Pumpstationen",
    longDescription:
      "Wir planen und realisieren Trinkwasserversorgungs- und Abwasseranlagen für Gemeinden, Wasserverbände und Industriebetriebe. Von der Einzelleitung bis zum kompletten Ortsnetz – INFRA BAU steht für verlässliche Qualität im Leitungsbau.",
    icon: "pipe",
    heroImage: "https://infrabau.at/images/wva-radstadt/wva-radstadt3.jpg",
    scope: [
      "Trinkwasserleitungen DN32–DN500",
      "Abwasserkanäle und Druckleitungen",
      "Pump- und Drucksteigerungsanlagen",
      "Hausanschlüsse und Ortsnetz",
      "Kanalfernsehuntersuchung",
      "Druckprüfung und Inbetriebnahme",
    ],
  },
  {
    slug: "betonbau",
    title: "Betonbau",
    shortTitle: "Betonbau",
    description: "Brücken, Stützmauern, Tiefgründungen, Infrastrukturbauwerke",
    longDescription:
      "Von der Stützmauer bis zur Spannbetonbrücke – INFRA BAU realisiert anspruchsvolle Betonbauwerke im Hoch- und Tiefbau. Unsere Teams beherrschen alle Schalungs- und Betonierverfahren und setzen moderne Qualitätssicherung ein.",
    icon: "concrete",
    heroImage: "https://infrabau.at/images/ennsbruecke/116.jpg",
    scope: [
      "Brücken und Durchlässe",
      "Stützmauern und Winkelstützmauern",
      "Fundamente und Bohrpfähle",
      "Tiefgaragen und Untergeschosse",
      "Betonreparatur und Instandsetzung",
      "Tunnelbauwerke",
    ],
  },
  {
    slug: "freileitungsbau",
    title: "Freileitungsbau",
    shortTitle: "Freileitungsbau",
    description:
      "Mastfundamente für Hoch- und Höchstspannungsanlagen, Tiefbau Energieinfrastruktur",
    longDescription:
      "INFRA BAU ist einer der führenden Spezialisten für Mastgründungen im DACH-Raum. Wir errichten Fundamente für Hoch- und Höchstspannungsleitungen (110–380 kV) – auch im alpinen Gelände und unter widrigsten Bedingungen.",
    icon: "tower",
    heroImage: "https://infrabau.at/images/apg-kaprun/apg-kaprun9.jpg",
    scope: [
      "Mastfundamente 110-kV- und 380-kV-Leitungen",
      "Bohrpfahlgründungen bis D=1.500 mm",
      "Alpines Gelände und Hubschraubereinsatz",
      "Erdkabel-Tiefbau",
      "Schaltanlagen-Tiefbau",
      "Geländewiederherstellung",
    ],
  },
  {
    slug: "erdbau-hangsicherung",
    title: "Erdbau & Hangsicherung",
    shortTitle: "Erdbau",
    description:
      "Geländemodellierung, Böschungssicherung, Felssicherung, Anker und Nagelwände",
    longDescription:
      "Böschungen sichern, Gelände formen, Hänge stabilisieren – INFRA BAU bietet umfassendes Know-how im Erdbau und in der geotechnischen Sicherung. Wir setzen auf bewährte Technologien wie Spritzbeton, Anker und Geotextilien.",
    icon: "mountain",
    heroImage: "https://infrabau.at/images/IMG_0484.jpg",
    scope: [
      "Böschungs- und Hangsicherung",
      "Felssicherung mit Systemankern",
      "Spritzbeton und Steinschlagschutz",
      "Nagelwände und Erdnagelungen",
      "Geländemodellierung und Erdbau",
      "Entwässerungsbohrungen",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
