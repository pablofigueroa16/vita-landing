"use client";
import Image from "next/image";
import ShinyText from "../ShinyText";

export default function DashboardPreview() {

  return (
    <section className="pt-6 md:pt-10 w-full">
      <div className="relative w-full overflow-hidden rounded-2xl border-2 border-brand/30">
        <Image
          src="/DASHBOARDSCREEN.png"
          alt="Vista previa del dashboard de VITA"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
          priority
        />
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <ShinyText
            text="PRÓXIMAMENTE"
            disabled={false}
            speed={2}
            className="text-text font-bold text-lg sm:text-3xl md:text-6xl text-center"
          />
        </div>
      </div>
    </section>
  );
}

