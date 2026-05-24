"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryProps {
  images: string[];
  title: string;
}

export default function Gallery({ images, title }: GalleryProps) {
  const [active, setActive] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
        <Image
          src={images[active]}
          alt={`${title} - Bild ${active + 1}`}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative w-24 h-16 shrink-0 overflow-hidden border-2 transition-colors ${
                active === i ? "border-[#1D4ED8]" : "border-transparent"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
