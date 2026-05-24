import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import Gallery from "@/components/projects/Gallery";
import Badge from "@/components/ui/Badge";
import type { Metadata } from "next";

const categoryLabels: Record<string, string> = {
  leitungsbau: "Leitungsbau",
  betonbau: "Betonbau",
  freileitungsbau: "Freileitungsbau",
  "erdbau-hangsicherung": "Erdbau & Hangsicherung",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} – INFRA BAU GmbH`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const categoryProjects = projects.filter(
    (p) => p.category === project.category && p.slug !== project.slug
  );
  const related = categoryProjects.slice(0, 2);

  return (
    <>
      {/* Dark hero */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end bg-[#0D1F3C] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          className="object-cover opacity-40"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3C] to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-16 pt-32">
          <div className="mb-4">
            <Badge variant="blue">{categoryLabels[project.category]}</Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-[-0.02em] mb-3 max-w-3xl">
            {project.title}
          </h1>
          <p className="text-white/60">{project.location}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Meta */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-12 border-b border-gray-100 mb-12">
            {[
              { label: "Auftraggeber", value: project.client },
              { label: "Standort", value: project.location },
              { label: "Zeitraum", value: project.period },
              ...(project.volume ? [{ label: "Volumen", value: project.volume }] : []),
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="text-xs font-semibold tracking-[0.15em] uppercase text-[#6B7280] mb-1">
                  {label}
                </div>
                <div className="font-semibold text-[#0D1F3C]">{value}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-[#0D1F3C] mb-6">
                Projektbeschreibung
              </h2>
              <p className="text-[#6B7280] leading-relaxed text-lg">
                {project.description}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0D1F3C] mb-6">
                Leistungsumfang
              </h2>
              <ul className="space-y-3">
                {project.scope.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                    <span className="text-[#0D1F3C]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gallery */}
          <Gallery images={project.images} title={project.title} />
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0D1F3C] mb-8">
              Weitere Projekte im {categoryLabels[project.category]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projekte/${p.slug}`}
                  className="group flex gap-4 bg-white p-4 border border-gray-100 hover:border-[#1D4ED8] transition-colors"
                >
                  <div className="relative w-24 h-20 shrink-0 overflow-hidden bg-gray-100">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="font-bold text-[#0D1F3C] group-hover:text-[#1D4ED8] transition-colors text-sm">
                      {p.title}
                    </div>
                    <div className="text-[#6B7280] text-xs mt-1">{p.location}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back link */}
      <div className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/projekte"
            className="flex items-center gap-2 text-[#1D4ED8] font-semibold hover:gap-3 transition-all text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 5 5 12 12 19" />
            </svg>
            Alle Projekte
          </Link>
        </div>
      </div>
    </>
  );
}
