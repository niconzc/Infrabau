import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – INFRA BAU GmbH",
};

export default function ImpressumPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#0D1F3C] mb-10 tracking-[-0.02em]">
          Impressum
        </h1>

        <div className="prose prose-gray max-w-none space-y-6 text-[#0D1F3C]">
          <div>
            <h2 className="text-lg font-bold mb-2">Unternehmensangaben</h2>
            <p className="text-[#6B7280] leading-relaxed">
              INFRA BAU GmbH
              <br />
              Nordstraße 5<br />
              5301 Eugendorf
              <br />
              Österreich
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Kontakt</h2>
            <p className="text-[#6B7280] leading-relaxed">
              Telefon: +43 6225 87160-0
              <br />
              E-Mail:{" "}
              <a href="mailto:office@infrabau.at" className="text-[#1D4ED8]">
                office@infrabau.at
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Firmenbuch</h2>
            <p className="text-[#6B7280] leading-relaxed">
              Firmenbuchnummer: FN XXXXXX a<br />
              Firmenbuchgericht: Landesgericht Salzburg
              <br />
              UID-Nr.: ATU XXXXXXXX
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Geschäftsführung</h2>
            <p className="text-[#6B7280] leading-relaxed">
              Wolfgang Ellmer, Herbert Sulzberger
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">
              Berufsrechtliche Angaben
            </h2>
            <p className="text-[#6B7280] leading-relaxed">
              Gewerbeberechtigung: Baumeister
              <br />
              Zuständige Behörde: Bezirkshauptmannschaft Salzburg-Umgebung
              <br />
              Mitglied der WKO Salzburg
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Haftungsausschluss</h2>
            <p className="text-[#6B7280] leading-relaxed">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
