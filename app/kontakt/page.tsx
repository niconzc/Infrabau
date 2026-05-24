import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – INFRA BAU GmbH",
  description:
    "Kontakt zu INFRA BAU GmbH: Nordstraße 5, 5301 Eugendorf. Tel. +43 6225 87160-0. office@infrabau.at",
};

export default function KontaktPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-[#1D4ED8] text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
            Kontakt
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em]">
            Wir freuen uns
            <br />
            auf Ihre Anfrage
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-[#0D1F3C] mb-8">
                Kontaktdaten
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-[#6B7280] mb-1">
                    Adresse
                  </div>
                  <address className="not-italic text-[#0D1F3C] font-medium">
                    INFRA BAU GmbH
                    <br />
                    Nordstraße 5
                    <br />
                    5301 Eugendorf
                    <br />
                    Österreich
                  </address>
                </div>

                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-[#6B7280] mb-1">
                    Telefon
                  </div>
                  <a
                    href="tel:+436225871600"
                    className="text-[#0D1F3C] font-medium hover:text-[#1D4ED8] transition-colors"
                  >
                    +43 6225 87160-0
                  </a>
                </div>

                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-[#6B7280] mb-1">
                    E-Mail
                  </div>
                  <a
                    href="mailto:office@infrabau.at"
                    className="text-[#0D1F3C] font-medium hover:text-[#1D4ED8] transition-colors"
                  >
                    office@infrabau.at
                  </a>
                </div>

                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-[#6B7280] mb-1">
                    Bürozeiten
                  </div>
                  <p className="text-[#0D1F3C]">
                    Mo–Do 07:00–16:30 Uhr
                    <br />
                    Fr 07:00–13:00 Uhr
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.5!2d13.1!3d47.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDUxJzAwLjAiTiAxM8KwMDYnMDAuMCJF!5e0!3m2!1sde!2sat!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="INFRA BAU GmbH Standort"
                  />
                </div>
              </div>
            </div>

            {/* Contact form (mailto) */}
            <div>
              <h2 className="text-2xl font-bold text-[#0D1F3C] mb-8">
                Projektanfrage
              </h2>
              <p className="text-[#6B7280] mb-8 leading-relaxed">
                Schreiben Sie uns direkt eine E-Mail mit Ihrem Anliegen. Wir
                melden uns schnellstmöglich bei Ihnen.
              </p>

              <div className="bg-[#F8FAFC] p-8">
                <div className="space-y-4 mb-6">
                  {[
                    "Projektbeschreibung und Standort",
                    "Gewünschten Leistungsbereich",
                    "Zeitraum und Kontaktdaten",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#1D4ED8] text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-[#0D1F3C] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="mailto:office@infrabau.at?subject=Projektanfrage"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#0D1F3C] text-white font-semibold rounded-[2px] hover:bg-[#1D4ED8] transition-colors"
                >
                  E-Mail schreiben
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
