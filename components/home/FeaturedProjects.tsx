import Link from "next/link";
import Image from "next/image";
import { getFeaturedProjects } from "@/lib/data/projects";
import Badge from "@/components/ui/Badge";

const categoryLabels: Record<string, string> = {
  leitungsbau: "Leitungsbau",
  betonbau: "Betonbau",
  freileitungsbau: "Freileitungsbau",
  "erdbau-hangsicherung": "Erdbau",
};

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();
  const [main, ...rest] = featured;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-[#1D4ED8] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
              Referenzen
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D1F3C] tracking-[-0.02em]">
              Ausgewählte Projekte
            </h2>
          </div>
          <Link
            href="/projekte"
            className="hidden md:flex items-center gap-2 text-[#1D4ED8] font-semibold hover:gap-3 transition-all"
          >
            Alle Projekte
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured main */}
          {main && (
            <Link href={`/projekte/${main.slug}`} className="group relative overflow-hidden bg-gray-100 aspect-[4/3] block">
              <Image
                src={main.coverImage}
                alt={main.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3C] via-[#0D1F3C]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <Badge variant="blue">{categoryLabels[main.category]}</Badge>
                <h3 className="text-white text-2xl font-bold mt-3 mb-1 leading-tight">
                  {main.title}
                </h3>
                <p className="text-white/60 text-sm">{main.location}</p>
              </div>
            </Link>
          )}

          {/* Right column - smaller cards */}
          <div className="grid grid-rows-3 gap-6">
            {rest.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                href={`/projekte/${p.slug}`}
                className="group relative overflow-hidden bg-gray-100 flex"
              >
                <div className="relative w-40 shrink-0">
                  <Image
                    src={p.coverImage}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                </div>
                <div className="bg-[#F8FAFC] group-hover:bg-[#0D1F3C] transition-colors duration-300 flex flex-col justify-center p-6">
                  <Badge variant="light">{categoryLabels[p.category]}</Badge>
                  <h3 className="text-[#0D1F3C] group-hover:text-white font-bold mt-2 mb-1 text-base transition-colors leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-[#6B7280] group-hover:text-white/60 text-xs transition-colors">
                    {p.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/projekte"
            className="flex items-center justify-center gap-2 text-[#1D4ED8] font-semibold border-2 border-[#1D4ED8] py-3 rounded-[2px] hover:bg-[#1D4ED8] hover:text-white transition-colors"
          >
            Alle Projekte ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
