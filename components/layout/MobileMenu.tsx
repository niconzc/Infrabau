"use client";

import Link from "next/link";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/leitungsbau", label: "Leitungsbau" },
  { href: "/betonbau", label: "Betonbau" },
  { href: "/freileitungsbau", label: "Freileitungsbau" },
  { href: "/erdbau-hangsicherung", label: "Erdbau & Hangsicherung" },
  { href: "/projekte", label: "Projekte" },
  { href: "/jobs", label: "Jobs" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0D1F3C]">
      <div className="flex flex-col h-full px-6 py-8">
        <div className="flex items-center justify-between mb-12">
          <span className="text-white text-2xl font-bold tracking-tight">
            INFRA BAU
          </span>
          <button
            onClick={onClose}
            className="text-white p-2"
            aria-label="Menü schließen"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-white text-2xl font-semibold py-3 border-b border-white/10 hover:text-[#1D4ED8] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm">INFRA BAU GmbH</p>
          <p className="text-white/60 text-sm">Nordstraße 5, 5301 Eugendorf</p>
          <p className="text-white/60 text-sm mt-1">+43 6225 87160-0</p>
        </div>
      </div>
    </div>
  );
}
