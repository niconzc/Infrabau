"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import MobileMenu from "./MobileMenu";

const services = [
  { href: "/leitungsbau", label: "Leitungsbau" },
  { href: "/betonbau", label: "Betonbau" },
  { href: "/freileitungsbau", label: "Freileitungsbau" },
  { href: "/erdbau-hangsicherung", label: "Erdbau & Hangsicherung" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    if (servicesOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [servicesOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-[#0D1F3C] shadow-lg" : "bg-[#0D1F3C]/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <Link href="/" className="shrink-0">
              <Image
                src="https://infrabau.at/images/infrabau-bauunternehmen-eugendorf-salzburg.jpg"
                alt="INFRA BAU GmbH"
                width={148}
                height={37}
                priority
                unoptimized
                className="h-9 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                  className="text-white/80 hover:text-white text-sm font-medium tracking-wide flex items-center gap-1.5 transition-colors py-2"
                >
                  Leistungen
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-0 w-60 bg-white shadow-2xl border border-gray-100 z-50 overflow-hidden"
                    style={{ marginTop: "2px" }}>
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-3 px-5 py-3.5 text-sm text-[#0D1F3C] hover:bg-[#0D1F3C] hover:text-white font-medium border-b border-gray-50 last:border-0 transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/projekte" className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors">
                Projekte
              </Link>
              <Link href="/jobs" className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors">
                Jobs
              </Link>
              <Link href="/kontakt" className="ml-2 px-5 py-2.5 bg-[#1D4ED8] text-white text-sm font-semibold tracking-wide rounded-[2px] hover:bg-[#1e40af] transition-colors">
                Kontakt
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white p-2"
              aria-label="Menü öffnen"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
