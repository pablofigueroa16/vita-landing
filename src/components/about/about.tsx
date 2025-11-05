"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// ==== Tipos Base ====
interface BaseProps {
  children: React.ReactNode;
}

// ==== ScrollFloat (Mock / Cumple 1 archivo) ====
const ScrollFloat = ({ children, containerClassName }: BaseProps & { containerClassName?: string }) => (
  <div className={containerClassName}>{children}</div>
);

// ==== ScrollReveal (Mock / Cumple 1 archivo) ====
const ScrollReveal = ({ children }: BaseProps) => <div>{children}</div>;

// ==== SpotlightCard con animación 3D ====
interface SpotlightCardProps extends BaseProps {
  title: string;
  stat: string;
  statDescription: string;
  className?: string;
}

const SpotlightCard = ({
  children,
  title,
  stat,
  statDescription,
  className = "",
}: SpotlightCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-60, 60], [10, -10]);
  const rotateY = useTransform(x, [-60, 60], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;
    x.set(posX / 5);
    y.set(posY / 5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`p-6 md:p-8 bg-white/5 backdrop-blur-xl rounded-xl relative overflow-hidden
      border border-white/10 hover:border-[#3b82f6] hover:shadow-2xl hover:shadow-[#3b82f6]/30
      transition-all duration-500 cursor-pointer group ${className}`}
    >
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#3b82f6]/20 rounded-full blur-2xl opacity-0 
        transition-opacity duration-500 group-hover:opacity-40 pointer-events-none"
      />

      <div className="relative z-10 text-left">
        <h4 className="text-gray-200 font-semibold uppercase tracking-wider mb-2">{title}</h4>

        <p className="text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {stat}
        </p>

        <p className="text-md font-medium text-[#3b82f6] mb-4">{statDescription}</p>
        <p className="text-gray-300 text-sm leading-relaxed">{children}</p>
      </div>
    </motion.div>
  );
};

// ==== Componente Principal ====
export default function About() {
  return (
    <div className="relative w-full z-10 flex flex-col items-center justify-center 
        gap-16 text-center px-6 py-24 min-h-screen text-gray-100 font-sans">

      {/* TÍTULO */}
      <ScrollFloat containerClassName="text-white font-extrabold text-5xl md:text-7xl">
        Sobre Nosotros
      </ScrollFloat>

      {/* Texto Principal */}
      <div className="max-w-4xl mx-auto space-y-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-relaxed">
            Transformamos el comercio digital.
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed">
            VITA combina automatización inteligente, verificación de identidad y pagos globales para crear
            un ecosistema donde todos pueden comprar y vender con confianza.
          </p>

          <button className="mt-8 px-8 py-3 rounded-lg font-semibold bg-white/10 text-white border border-[#3b82f6]
            backdrop-blur-md shadow-lg shadow-[#3b82f6]/20 hover:bg-white/20 transition duration-300">
            Saber Más
          </button>
        </ScrollReveal>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mt-10">
        <SpotlightCard title="Tecnología y AI" stat="90%" statDescription="Automatización Inteligente">
          Más del 90% de la infraestructura funciona con IA para verificación, pagos y seguridad inteligente.
        </SpotlightCard>

        <SpotlightCard title="Propósito y Valores" stat="" statDescription="Tecnología con Fe y Servicio">
          Creemos en la tecnología que construye, cuida y empodera vidas reales.
        </SpotlightCard>

        <SpotlightCard title="Expansión Global" stat="$6.3B" statDescription="Mercado en Crecimiento">
          El comercio global está acelerando y VITA está diseñada para liderar esta evolución.
        </SpotlightCard>
      </div>

      <div className="max-w-3xl mt-16">
        <ScrollReveal>
          <p className="text-2xl font-semibold text-gray-200 italic">
            "El comercio del futuro es humano, transparente y seguro. Eso es VITA."
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
