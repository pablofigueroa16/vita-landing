"use client";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ScrollFloat from "../ScrollFloat";

type TimelineItem = {
  id: string;
  period: string;
  role: string;
  description: string;
  side: "left" | "right";
};

const items: TimelineItem[] = [
  {
    id: "t1",
    period: "2025",
    role: "Fundación del Ecosistema VITA",
    description:
      "Definimos el stack tecnológico, seleccionamos a los primeros cofundadores y diseñamos la arquitectura del modelo de negocio. Nace la estructura base de la landing page y la plataforma de eCommerce Intelligence, piedra angular de todo lo que vendrá.",
    side: "left",
  },
  {
    id: "t2",
    period: "2026",
    role: "Pre Lanzamiento en México",
    description:
      "Comenzamos a abrir las puertas del futuro digital con eventos exclusivos, alianzas estratégicas y un gran webinar de lanzamiento que marcará el inicio de la comunidad VITA en Latinoamérica.",
    side: "right",
  },
  {
    id: "t3",
    period: "2026",
    role: "Expansión y primeros 1,000 merchants",
    description:
      "Ejecutamos una campaña agresiva de marketing en México, alcanzando los primeros 1,000 comercios registrados. Damos el siguiente paso hacia la internacionalización con el prelanzamiento oficial en Dubái.",
    side: "left",
  },
  {
    id: "t4",
    period: "2026",
    role: "Evolución del Ecosistema Inteligente",
    description:
      "Lanzamos las herramientas sociales, el CRM potenciado con IA, el chat inteligente y nuevas integraciones de pago. VITA se consolida como una red viva que conecta personas, marcas y confianza.",
    side: "right",
  },
];

const CalendarIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    role="img"
  >
    <rect
      x="3"
      y="5"
      width="18"
      height="16"
      rx="2"
      className="fill-transparent"
    />
    <path d="M7 3v4M17 3v4" stroke="currentColor" strokeWidth="2" />
    <rect
      x="3"
      y="8"
      width="18"
      height="5"
      className="fill-current"
      opacity="0.15"
    />
    <rect x="6" y="14" width="4" height="3" className="fill-current" />
    <rect x="12" y="14" width="4" height="3" className="fill-current" />
  </svg>
);

const ScrollTimeline: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [trackH, setTrackH] = useState(0);
  useEffect(() => {
    const measure = () =>
      setTrackH(
        containerRef.current?.getBoundingClientRect().height ||
          window.innerHeight
      );
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const yRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.max(0, trackH - 80)]
  );
  const y = useSpring(yRaw, { stiffness: 140, damping: 22 });

  const header = useMemo(
    () => ({
      title: "De dónde venimos y hacia dónde vamos",
      subtitle:
        "El camino de VITA está marcado por innovación, propósito y expansión. Cada hito representa un paso más hacia transformar el comercio digital en una experiencia humana, inteligente y segura.",
    }),
    []
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full text-text px-6 pt-20 pb-10"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <div className="flex flex-col items-center justify-start mb-8">
        <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="text-brand font-bold text-4xl md:text-xl"
      >
        TIMELINE
      </ScrollFloat>
        <h2 className="mx-[10%] py-4 text-4xl md:text-5xl font-extrabold tracking-tight text-text">
          {header.title}
        </h2>
        <p className="text-sm md:text-base text-text-secondary my-4 text-center mx-[10%]">
          {header.subtitle}
        </p>
      </div>

      <div className="relative mx-auto" style={{ maxWidth: 992 }}>
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-text-secondary/40"
          aria-hidden="true"
        />
        <motion.div
          style={{ y }}
          className="absolute left-1/2 -translate-x-1/2 w-[14px] h-[14px] rounded-full bg-brand"
          aria-hidden="true"
        >
          <span className="absolute inset-0 m-auto w-[14px] h-[14px] rounded-full shadow-[0_0_24px_hsl(200_100%_45%/0.9)]" />
        </motion.div>

        <div className="flex flex-col gap-14">
          {items.map((item) => (
            <section
              key={item.id}
              className="relative"
              style={{ scrollSnapAlign: "start" }}
              aria-labelledby={`${item.id}-title`}
            >
              <div className="grid grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] items-center">
                {item.side === "left" ? (
                  <motion.article
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="glass-card p-6 md:p-7 rounded-2xl shadow-xl text-left hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    tabIndex={0}
                    role="article"
                  >
                    <div className="flex items-center gap-2 text-text-secondary mb-2">
                      <CalendarIcon className="w-5 h-5 text-text-secondary" />
                      <span className="text-xs md:text-sm font-medium">
                        {item.period}
                      </span>
                    </div>
                    <h3
                      id={`${item.id}-title`}
                      className="text-lg md:text-xl font-semibold text-text"
                    >
                      {item.role}
                    </h3>
                    <p className="text-sm md:text-sm leading-relaxed text-text-secondary mt-3">
                      {item.description}
                    </p>
                  </motion.article>
                ) : (
                  <div />
                )}

                {/* Marcador centrado en la columna de la línea */}
                <div className="relative flex items-center justify-center" aria-hidden="true">
                  <span className="w-[18px] h-[18px] rounded-full border border-text bg-bg" />
                </div>

                {item.side === "right" ? (
                  <motion.article
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="glass-card p-6 md:p-7 rounded-2xl shadow-xl text-left hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    tabIndex={0}
                    role="article"
                  >
                    <div className="flex items-center gap-2 text-text-secondary mb-2">
                      <CalendarIcon className="w-5 h-5 text-text-secondary" />
                      <span className="text-xs md:text-sm font-medium">
                        {item.period}
                      </span>
                    </div>
                    <h3
                      id={`${item.id}-title`}
                      className="text-lg md:text-xl font-semibold text-text"
                    >
                      {item.role}
                    </h3>
                    <p className="text-sm md:text-sm leading-relaxed text-text-secondary mt-3">
                      {item.description}
                    </p>
                  </motion.article>
                ) : (
                  <div />
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollTimeline;
