import Link from "next/link";
import { services } from "@/lib/data/services";

const icons: Record<string, React.ReactNode> = {
  pipe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
      <path d="M7 3v18M17 3v18" strokeLinecap="round" />
    </svg>
  ),
  concrete: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="2" y="14" width="20" height="8" rx="1" />
      <path d="M4 14V6a2 2 0 012-2h12a2 2 0 012 2v8" />
      <path d="M9 14V8M15 14V8" strokeLinecap="round" />
    </svg>
  ),
  tower: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M12 2L8 22M12 2L16 22" strokeLinecap="round" />
      <path d="M7 8l10-0M6 14h12M5 20h14" strokeLinecap="round" />
    </svg>
  ),
  mountain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M3 20L10 8l4 6 3-4 4 10H3z" strokeLinejoin="round" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <span className="text-[#1D4ED8] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
            Leistungen
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0D1F3C] tracking-[-0.02em]">
            Was wir bauen
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group bg-white p-8 hover:bg-[#0D1F3C] transition-colors duration-300 border border-gray-100"
            >
              <div className="text-[#1D4ED8] group-hover:text-white mb-6 transition-colors">
                {icons[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-[#0D1F3C] group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-[#6B7280] group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#1D4ED8] group-hover:text-white text-sm font-semibold transition-colors">
                Mehr erfahren
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
