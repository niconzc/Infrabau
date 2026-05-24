import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types";
import Badge from "@/components/ui/Badge";

const categoryLabels: Record<string, string> = {
  leitungsbau: "Leitungsbau",
  betonbau: "Betonbau",
  freileitungsbau: "Freileitungsbau",
  "erdbau-hangsicherung": "Erdbau",
};

interface CardProps {
  project: Project;
}

export default function Card({ project }: CardProps) {
  return (
    <Link
      href={`/projekte/${project.slug}`}
      className="group block bg-white border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          unoptimized
        />
      </div>
      <div className="p-6">
        <div className="mb-3">
          <Badge variant="light">{categoryLabels[project.category]}</Badge>
        </div>
        <h3 className="font-bold text-[#0D1F3C] text-lg leading-tight mb-2 group-hover:text-[#1D4ED8] transition-colors">
          {project.title}
        </h3>
        <p className="text-[#6B7280] text-sm">{project.location}</p>
        {project.volume && (
          <p className="text-[#6B7280] text-sm">{project.period} · {project.volume}</p>
        )}
      </div>
    </Link>
  );
}
