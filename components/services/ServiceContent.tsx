import Link from "next/link";
import { Service } from "@/lib/types";
import { Project } from "@/lib/types";
import Card from "@/components/projects/Card";

interface ServiceContentProps {
  service: Service;
  projects: Project[];
}

export default function ServiceContent({ service, projects }: ServiceContentProps) {
  return (
    <>
      {/* Description + Scope */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-[#0D1F3C] mb-6 tracking-[-0.02em]">
                Unsere Leistung im {service.title}
              </h2>
              <p className="text-[#6B7280] leading-relaxed text-lg">
                {service.longDescription}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1D4ED8] mb-6">
                Leistungsumfang
              </h3>
              <ul className="space-y-3">
                {service.scope.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2.5 shrink-0" />
                    <span className="text-[#0D1F3C] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      {projects.length > 0 && (
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0D1F3C] mb-10 tracking-[-0.02em]">
              Referenzprojekte
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <Card key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-20 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Projekt anfragen
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Kontaktieren Sie uns für eine unverbindliche Anfrage oder ein
            Erstgespräch zu Ihrem Projekt.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1D4ED8] text-white font-semibold rounded-[2px] hover:bg-[#1e40af] transition-colors"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
