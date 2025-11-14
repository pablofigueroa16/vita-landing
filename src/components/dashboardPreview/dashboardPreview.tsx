"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

export default function DashboardPreview() {
  const [isHovered, setIsHovered] = useState(false);

  const tiltStyle = useMemo(
    () => ({
      transform: isHovered
        ? "perspective(1600px) rotateX(8deg) rotateY(-12deg) translateY(-12px)"
        : "perspective(1600px) rotateX(0deg) rotateY(0deg) translateY(0)",
      boxShadow: isHovered
        ? "0 35px 60px -15px rgba(0, 0, 0, 0.45)"
        : "0 25px 45px -20px rgba(0, 0, 0, 0.35)",
      transformStyle: "preserve-3d",
      transition:
        "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
    }),
    [isHovered]
  );

  return (
    <section className="relative py-16 md:py-24">
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div
          className="cursor-pointer"
          style={tiltStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          onTouchCancel={() => setIsHovered(false)}
        >
          <div className="relative rounded-2xl overflow-hidden border-4 border-brand/30 bg-gradient-to-br from-primary/30 via-card/30 to-primary/30">
            <Image
              src="/DASHBOARD SCREEN.png"
              alt="Vista previa del dashboard de VITA"
              width={1920}
              height={1080}
              className="w-full h-auto select-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

