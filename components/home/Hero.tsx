"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const heroImages = [
  {
    src: "https://infrabau.at/images/apg-kaprun/apg-kaprun9.jpg",
    alt: "Freileitungsbau APG Kaprun",
  },
  {
    src: "https://infrabau.at/images/containerschule/containerschule.jpg",
    alt: "Betonbau Schulzentrum Radstadt",
  },
  {
    src: "https://infrabau.at/images/wva-radstadt/wva-radstadt3.jpg",
    alt: "Leitungsbau WVA Radstadt",
  },
  {
    src: "https://infrabau.at/images/IMG_0484.jpg",
    alt: "Hangsicherung Buchberg",
  },
];

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0D1F3C]">
      {/* Subtle dark texture overlay */}
      <div className="absolute inset-0 bg-[#0D1F3C]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div ref={contentRef}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#1D4ED8]" />
              <span className="text-[#1D4ED8] text-sm font-semibold tracking-[0.2em] uppercase">
                Infrastruktur für Österreich
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[64px] font-bold text-white leading-[1.05] tracking-[-0.02em] mb-6">
              Wir bauen
              <br />
              <span className="text-[#1D4ED8]">Infrastruktur.</span>
            </h1>

            <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-lg">
              INFRA BAU GmbH – Ihr verlässlicher Partner für Leitungsbau,
              Betonbau, Freileitungsbau und Erdbau in Österreich und der
              DACH-Region. Seit 2012. ANKÖ-zertifiziert.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projekte"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#1D4ED8] text-white font-semibold rounded-[2px] hover:bg-[#1e40af] transition-colors"
              >
                Unsere Projekte
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent text-white font-semibold border-2 border-white/30 rounded-[2px] hover:border-white hover:bg-white/10 transition-colors"
              >
                Kontakt aufnehmen
              </Link>
            </div>

            {/* Stats bar */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-8">
              {[
                { value: "12+", label: "Jahre Erfahrung" },
                { value: "200+", label: "Projekte" },
                { value: "4", label: "Leistungsbereiche" },
                { value: "ANKÖ", label: "Zertifiziert" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-white mb-1">{value}</div>
                  <div className="text-white/50 text-xs uppercase tracking-widest">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image grid */}
          <div className="hidden lg:grid grid-cols-2 gap-3 h-[540px]">
            {heroImages.map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden ${i === 0 ? "row-span-2" : ""}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={i === 0}
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-[#0D1F3C]/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
