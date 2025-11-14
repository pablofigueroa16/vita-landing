"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Tipos para cada item del menú
interface NavItem {
  label: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", id: "home" },
  { label: "Solución", id: "solution" },
  { label: "Equipo", id: "team" },
  { label: "Preguntas", id: "faq" },
  { label: "Contacto", id: "contact" },
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState<string>(NAV_ITEMS[0].id);
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Asegurar que el componente está montado en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  const smoothScrollTo = (targetY: number, duration = 600) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    if (distance === 0) return;

    let startTime: number | null = null;

    const easeInOut = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animationStep = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOut(progress);

      window.scrollTo({
        top: startY + distance * easedProgress,
        behavior: "auto",
      });

      if (progress < 1) requestAnimationFrame(animationStep);
    };

    requestAnimationFrame(animationStep);
  };

  // Scroll suave al hacer clic
  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navbarHeight = navRef.current?.offsetHeight ?? 0;
    const padding = 32;
    const targetPosition =
      el.getBoundingClientRect().top + window.scrollY - (navbarHeight + padding);

    smoothScrollTo(targetPosition);
  };

  // Detectar la sección visible
  useEffect(() => {
    if (!mounted) return;

    const sectionEls = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => Boolean(el));

    if (!sectionEls.length) return;

    const navbarHeight = navRef.current?.offsetHeight ?? 0;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;

        const nextSection = visible[0].target.id;
        setActiveSection((prev) => (prev === nextSection ? prev : nextSection));
      },
      {
        rootMargin: `-${navbarHeight + 20}px 0px -55% 0px`,
        threshold: [0.1, 0.35, 0.55],
      }
    );

    sectionEls.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [mounted]);

  return (
    <nav
      ref={navRef}
      aria-label="Navegación principal"
      className={cn(
        "md:block hidden fixed top-8 left-1/2 -translate-x-1/2",
        "w-1/2 h-16 z-50 rounded-2xl border border-primary/30",
        "bg-primary/35 bg-gradient-to-r from-primary/25 via-card/15 to-primary/25",
        "backdrop-blur-md shadow-xl transition-all"
      )}
      role="navigation"
    >
      <div className="flex items-center justify-between h-full px-4">

        {/* ⭐ LOGO CON ANIMACIÓN + CLICK PARA VOLVER AL INICIO */}
        <button
          onClick={() => handleNavigate("home")}
          className={cn(
            "inline-flex items-center gap-3 transition-all duration-300",
            "hover:scale-105 hover:brightness-110 active:scale-95"
          )}
          aria-label="Ir al inicio"
        >
          <Image
            src="/vita-logo-blanco.png"
            alt="Logo de VITA"
            width={72}
            height={72}
            className="w-[72px] h-[72px] drop-shadow-lg"
            priority
          />
        </button>

        {/* Items */}
        <ul
          className="flex justify-end items-center h-full m-0 px-3 gap-7 list-none"
          role="list"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = mounted && activeSection === item.id;

            return (
              <li key={item.id} role="listitem">
                <button
                  onClick={() => handleNavigate(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative px-2 py-1 text-base transition-all duration-300",
                    "hover:text-brand/80 focus:outline-none",
                    isActive
                      ? "font-semibold text-brand"
                      : "text-text-secondary"
                  )}
                >
                  {item.label}

                  {isActive && (
                    <span
                      className="absolute left-0 -bottom-1 w-full h-[2px] 
                                 bg-brand rounded-full transition-all duration-300"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
