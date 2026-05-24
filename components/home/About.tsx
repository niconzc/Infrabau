export default function About() {
  return (
    <section className="py-24 bg-[#0D1F3C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#1D4ED8] text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
              Über uns
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-[-0.02em] mb-8 leading-tight">
              Gegründet 2012.
              <br />
              Gewachsen durch
              <br />
              Leistung.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              INFRA BAU GmbH wurde 2012 von Wolfgang Ellmer und Herbert
              Sulzberger in Eugendorf gegründet. Was als kleines Tiefbauunternehmen
              begann, ist heute ein etablierter Partner für Gemeinden,
              Energieversorger und Infrastrukturbetreiber in der DACH-Region.
            </p>
            <p className="text-white/60 leading-relaxed">
              Unsere Stärke liegt in der Kombination aus handwerklicher
              Exzellenz und modernem Projektmanagement. Wir sind ANKÖ-zertifiziert
              und setzen bei jedem Projekt auf höchste Qualitätsstandards.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                year: "2012",
                text: "Gründung durch Wolfgang Ellmer und Herbert Sulzberger in Eugendorf",
              },
              {
                year: "2015",
                text: "Erweiterung auf Freileitungsbau – erste Mastfundamente für die APG",
              },
              {
                year: "2018",
                text: "ANKÖ-Zertifizierung und Aufnahme in die Auftragnehmer-Liste des Landes Salzburg",
              },
              {
                year: "2023+",
                text: "Über 200 realisierte Projekte in Österreich und der DACH-Region",
              },
            ].map(({ year, text }) => (
              <div
                key={year}
                className="bg-white/5 border border-white/10 p-6"
              >
                <div className="text-[#1D4ED8] text-2xl font-bold mb-2">
                  {year}
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
