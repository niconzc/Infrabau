"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0D1F3C]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/infrabau-hero-construction/1920/1080"
          alt="INFRA BAU Baustelle"
          fill
          priority
          className="object-cover opacity-30"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1F3C] via-[#0D1F3C]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-16">
        <div ref={heroRef} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#1D4ED8]" />
            <span className="text-[#1D4ED8] text-sm font-semibold tracking-[0.2em] uppercase">
              Infrastruktur für Österreich
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-[-0.02em] mb-8">
            Wir bauen
            <br />
            <span className="text-[#1D4ED8]">Infrastruktur.</span>
          </h1>

          <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-10">
            INFRA BAU GmbH realisiert anspruchsvolle Projekte im Leitungsbau,
            Betonbau, Freileitungsbau und in der Hangsicherung – seit 2012 mit
            Verlässlichkeit und Qualität.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projekte"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#1D4ED8] text-white font-semibold rounded-[2px] hover:bg-[#1e40af] transition-colors"
            >
              Unsere Projekte
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-7 py-4 bg-transparent text-white font-semibold border-2 border-white/40 rounded-[2px] hover:border-white hover:bg-white/10 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          {[
            { value: "12+", label: "Jahre Erfahrung" },
            { value: "200+", label: "Projekte realisiert" },
            { value: "4", label: "Leistungsbereiche" },
            { value: "ANKÖ", label: "Zertifiziert" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-bold text-white mb-1">{value}</div>
              <div className="text-white/50 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
