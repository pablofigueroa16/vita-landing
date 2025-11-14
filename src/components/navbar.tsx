"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Tipos para cada item del menú
interface NavItem {
  label: string;
  id: string;
}

export default function NavBar() {
  const items: NavItem[] = [
    { label: "Inicio", id: "home" },
    { label: "Solución", id: "solution" },
    { label: "Equipo", id: "team" },
    { label: "Preguntas", id: "faq" },
    { label: "Contacto", id: "contact" },
  ];

  const [activeSection, setActiveSection] = useState<string>("home");
  const navRef = useRef<HTMLDivElement>(null);

  // Scroll suave al hacer clic
  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Detectar la sección visible
  useEffect(() => {
    const sectionEls = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sectionEls.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      ref={navRef}
      aria-label="Navegación principal"
      className={cn(
        "md:block hidden fixed top-8 left-1/2 -translate-x-1/2",
        "w-[55%] h-16 z-50 rounded-2xl border border-primary/30",
        "bg-primary/35 bg-gradient-to-r from-primary/25 via-card/15 to-primary/25",
        "backdrop-blur-md shadow-xl transition-all"
      )}
      role="navigation"
    >
      <div className="flex items-center justify-between h-full px-4">

        {/* ⭐ LOGO MÁS GRANDE + HOVER ANIMADO + CLICK AL INICIO */}
        <button
          onClick={() => handleNavigate("home")}
          className="inline-flex items-center gap-3 transition-all duration-300 
                     hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] 
                     active:scale-95 cursor-pointer"
          aria-label="Ir al inicio"
        >
          <Image
            src="/vita-logo-blanco.png"
            alt="Logo de VITA"
            width={85}
            height={85}
            className="w-[85px] h-[85px]"
            priority
          />
        </button>

        {/* Items */}
        <ul
          className="flex justify-end items-center h-full m-0 px-3 gap-7 list-none"
          role="list"
        >
          {items.map((item) => {
            const isActive = activeSection === item.id;

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
