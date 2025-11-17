"use client";

import { useCallback, useState } from "react";
import Image from "next/image";

const LOGOS = [
  { src: "/logos/gold.png", alt: "Logo aliado 1" },
  { src: "/logos/cregis.png", alt: "Logo aliado 2" },
  { src: "/logos/didit.png", alt: "Logo aliado 3" },
  { src: "/logos/invertox2.png", alt: "Logo aliado 4" },
  { src: "/logos/likenew.png", alt: "Logo aliado 5" },
  { src: "/logos/5.5.png", alt: "Logo aliado 6" },
  { src: "/logos/7.7.png", alt: "Logo aliado 7" },
];

export default function LogosMarquee() {
  const [paused, setPaused] = useState(false);
  const handlePause = useCallback(() => setPaused(true), []);
  const handleResume = useCallback(() => setPaused(false), []);
  const items = [...LOGOS, ...LOGOS];

  return (
    <section
      className="pb-12 md:pb-16 bg-black"
    >
      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />

        <div
          className="marquee-track flex items-center gap-12"
          data-paused={paused}
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
        >
          {items.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="flex min-w-[160px] items-center justify-center"
              onMouseEnter={handlePause}
              onFocus={handlePause}
              onBlur={handleResume}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="h-20 w-auto filter grayscale opacity-80 transition-opacity duration-200 hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

