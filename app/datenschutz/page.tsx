import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – INFRA BAU GmbH",
};

export default function DatenschutzPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#0D1F3C] mb-10 tracking-[-0.02em]">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-[#6B7280] leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-[#0D1F3C] mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0D1F3C] mb-3">
              2. Verantwortlicher
            </h2>
            <p>
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
              <br />
              <br />
              INFRA BAU GmbH
              <br />
              Nordstraße 5, 5301 Eugendorf
              <br />
              E-Mail:{" "}
              <a href="mailto:office@infrabau.at" className="text-[#1D4ED8]">
                office@infrabau.at
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0D1F3C] mb-3">
              3. Datenerfassung auf dieser Website
            </h2>
            <p>
              Diese Website wird als statische Website auf GitHub Pages
              gehostet. Es werden keine Cookies gesetzt und keine
              personenbezogenen Daten durch die Website selbst erhoben. Wenn
              Sie uns per E-Mail kontaktieren, werden Ihre angegebenen Daten
              zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0D1F3C] mb-3">
              4. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
              Löschung oder Einschränkung der Verarbeitung Ihrer gespeicherten
              Daten sowie das Recht auf Datenübertragbarkeit. Bitte wenden Sie
              sich dazu an{" "}
              <a href="mailto:office@infrabau.at" className="text-[#1D4ED8]">
                office@infrabau.at
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0D1F3C] mb-3">
              5. Google Maps
            </h2>
            <p>
              Auf der Kontaktseite wird Google Maps eingebunden. Dabei werden
              Daten an Google LLC übermittelt. Weitere Informationen finden Sie
              in der{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1D4ED8]"
              >
                Datenschutzerklärung von Google
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
