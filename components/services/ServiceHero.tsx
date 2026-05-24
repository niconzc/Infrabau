import Image from "next/image";
import { Service } from "@/lib/types";

interface ServiceHeroProps {
  service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative h-[65vh] min-h-[480px] flex items-end bg-[#0D1F3C] overflow-hidden">
      <Image
        src={service.heroImage}
        alt={service.title}
        fill
        priority
        className="object-cover opacity-40"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1F3C] via-[#0D1F3C]/60 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-16 pt-32">
        <span className="text-[#1D4ED8] text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
          Leistung
        </span>
        <h1 className="text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em] mb-4">
          {service.title}
        </h1>
        <p className="text-white/60 text-lg max-w-2xl">{service.description}</p>
      </div>
    </section>
  );
}
