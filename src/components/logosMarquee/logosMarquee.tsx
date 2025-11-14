"use client";

import { useCallback, useState } from "react";
import Image from "next/image";

const LOGOS = [
  { src: "/logos/1.png", alt: "Logo aliado 1" },
  { src: "/logos/2.png", alt: "Logo aliado 2" },
  { src: "/logos/3.png", alt: "Logo aliado 3" },
  { src: "/logos/4.png", alt: "Logo aliado 4" },
  { src: "/logos/5.png", alt: "Logo aliado 5" },
  { src: "/logos/6.png", alt: "Logo aliado 6" },
];

export default function LogosMarquee() {
  const [paused, setPaused] = useState(false);
  const handlePause = useCallback(() => setPaused(true), []);
  const handleResume = useCallback(() => setPaused(false), []);
  const items = [...LOGOS, ...LOGOS];

  return (
    <section
      aria-label="Organizaciones que confían en VITA"
      className="py-12 md:py-16"
    >
      <div className="flex flex-col gap-4 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-brand/80">
          Confían en nosotros
        </p>
        <h2 className="text-2xl font-semibold text-text-primary">
          Innovación validada con aliados estratégicos
        </h2>
      </div>

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
                className="h-12 w-auto opacity-80 transition-opacity duration-200 hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

