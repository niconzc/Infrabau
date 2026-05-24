import { projects } from "@/lib/data/projects";
import FilteredProjects from "@/components/projects/FilteredProjects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekte – INFRA BAU GmbH",
  description:
    "Referenzprojekte von INFRA BAU GmbH: Leitungsbau, Betonbau, Freileitungsbau und Erdbau in Österreich.",
};

export default function ProjektePage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-[#1D4ED8] text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
            Referenzen
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em]">
            Unsere Projekte
          </h1>
          <p className="text-white/60 mt-4 text-lg">
            {projects.length} realisierte Projekte in Österreich und der DACH-Region
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FilteredProjects projects={projects} />
        </div>
      </section>
    </>
  );
}
