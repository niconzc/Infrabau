import Link from "next/link";
import { jobs } from "@/lib/data/jobs";

export default function JobsCTA() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2">
            <span className="text-[#1D4ED8] text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
              Karriere
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D1F3C] tracking-[-0.02em] mb-6">
              Werde Teil
              <br />
              unseres Teams
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-8">
              Wir suchen engagierte Fachkräfte, die mit uns die Infrastruktur
              von morgen bauen. Faire Entlohnung, modernes Arbeitsumfeld und
              Weiterentwicklungsmöglichkeiten.
            </p>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D1F3C] text-white font-semibold rounded-[2px] hover:bg-[#1D4ED8] transition-colors"
            >
              Alle offenen Stellen
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          <div className="lg:w-1/2 grid gap-4 w-full">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 border border-gray-100 flex items-center justify-between group hover:border-[#1D4ED8] transition-colors"
              >
                <div>
                  <h3 className="font-bold text-[#0D1F3C] mb-1">{job.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                    <span>{job.location}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
                    <span className="text-xs font-semibold px-2 py-0.5 bg-[#F8FAFC] text-[#0D1F3C] border border-[#0D1F3C]/20 rounded-[2px]">
                      {job.type}
                    </span>
                  </div>
                </div>
                <a
                  href={`mailto:${job.email}?subject=Bewerbung: ${job.title}`}
                  className="text-[#1D4ED8] group-hover:bg-[#1D4ED8] group-hover:text-white text-sm font-semibold px-4 py-2 border-2 border-[#1D4ED8] rounded-[2px] transition-colors whitespace-nowrap"
                >
                  Bewerben
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
