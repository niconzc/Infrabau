import { jobs } from "@/lib/data/jobs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs – INFRA BAU GmbH",
  description:
    "Offene Stellen bei INFRA BAU GmbH: Werde Teil unseres Tiefbau-Teams in Eugendorf, Salzburg.",
};

export default function JobsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-[#1D4ED8] text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
            Karriere
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em]">
            Jobs bei INFRA BAU
          </h1>
          <p className="text-white/60 mt-4 text-lg max-w-2xl">
            Werde Teil eines wachsenden Unternehmens, das Infrastruktur für
            Österreich und die DACH-Region baut. Faire Entlohnung, modernes
            Arbeitsumfeld, echte Projekte.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-6 max-w-4xl">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-gray-100 p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[#0D1F3C] mb-2">
                      {job.title}
                    </h2>
                    <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                      <span>{job.location}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="font-semibold px-2.5 py-0.5 bg-[#1D4ED8] text-white rounded-[2px] text-xs">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`mailto:${job.email}?subject=Bewerbung: ${job.title}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1D4ED8] text-white font-semibold rounded-[2px] hover:bg-[#1e40af] transition-colors whitespace-nowrap shrink-0"
                  >
                    Jetzt bewerben
                  </a>
                </div>

                <p className="text-[#6B7280] leading-relaxed mb-6">
                  {job.description}
                </p>

                <div>
                  <h3 className="text-sm font-semibold tracking-widest uppercase text-[#0D1F3C]/40 mb-3">
                    Anforderungen
                  </h3>
                  <ul className="space-y-2">
                    {job.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-3 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-1.5 shrink-0" />
                        <span className="text-[#0D1F3C]">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#0D1F3C] p-8 max-w-4xl">
            <h2 className="text-2xl font-bold text-white mb-3">
              Keine passende Stelle dabei?
            </h2>
            <p className="text-white/60 mb-6">
              Schicke uns einfach deine Initiativbewerbung. Wir freuen uns immer
              über engagierte Fachkräfte.
            </p>
            <a
              href="mailto:office@infrabau.at?subject=Initiativbewerbung"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1D4ED8] text-white font-semibold rounded-[2px] hover:bg-[#1e40af] transition-colors"
            >
              Initiativbewerbung
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
