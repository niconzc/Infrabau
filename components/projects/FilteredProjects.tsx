"use client";

import { useState } from "react";
import { Project, ProjectCategory } from "@/lib/types";
import Card from "./Card";

const categories: { value: "all" | ProjectCategory; label: string }[] = [
  { value: "all", label: "Alle" },
  { value: "leitungsbau", label: "Leitungsbau" },
  { value: "betonbau", label: "Betonbau" },
  { value: "freileitungsbau", label: "Freileitungsbau" },
  { value: "erdbau-hangsicherung", label: "Erdbau & Hangsicherung" },
];

interface FilteredProjectsProps {
  projects: Project[];
}

export default function FilteredProjects({ projects }: FilteredProjectsProps) {
  const [active, setActive] = useState<"all" | ProjectCategory>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap mb-10">
        {categories.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`px-5 py-2 text-sm font-semibold rounded-[2px] border-2 transition-colors ${
              active === value
                ? "bg-[#0D1F3C] text-white border-[#0D1F3C]"
                : "bg-white text-[#0D1F3C] border-[#0D1F3C]/20 hover:border-[#0D1F3C]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <Card key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
