import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0D1F3C] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold tracking-tight">INFRA BAU</span>
              <span className="text-white/50 text-sm ml-2">GmbH</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Ihr verlässlicher Partner für Leitungsbau, Betonbau,
              Freileitungsbau und Erdbau in der DACH-Region. Gegründet 2012.
              ANKÖ-zertifiziert.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-4">
              Leistungen
            </h4>
            <ul className="space-y-2">
              {[
                ["Leitungsbau", "/leitungsbau"],
                ["Betonbau", "/betonbau"],
                ["Freileitungsbau", "/freileitungsbau"],
                ["Erdbau & Hangsicherung", "/erdbau-hangsicherung"],
                ["Alle Projekte", "/projekte"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-4">
              Kontakt
            </h4>
            <address className="not-italic space-y-2 text-sm text-white/60">
              <p>Nordstraße 5</p>
              <p>5301 Eugendorf, Österreich</p>
              <p className="pt-2">
                <a
                  href="tel:+436225871600"
                  className="hover:text-white transition-colors"
                >
                  +43 6225 87160-0
                </a>
              </p>
              <p>
                <a
                  href="mailto:office@infrabau.at"
                  className="hover:text-white transition-colors"
                >
                  office@infrabau.at
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} INFRA BAU GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            {[
              ["Impressum", "/impressum"],
              ["Datenschutz", "/datenschutz"],
              ["AGB", "/agb"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
