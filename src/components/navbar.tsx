"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type NavItem = { id: string; label: string; ariaLabel: string };

export default function NavBar() {
  const navRef = useRef<HTMLElement | null>(null);
  const [activeSection, setActiveSection] = useState<string>("home");
  const items: NavItem[] = useMemo(
    () => [
      { id: "home", label: "Inicio", ariaLabel: "Home" },
      { id: "issues", label: "Problema", ariaLabel: "Problema" },
      { id: "about", label: "Acerca de", ariaLabel: "Acerca de" },
      { id: "solution", label: "Solución", ariaLabel: "Solución" },
      {
        id: "features",
        label: "Funcionalidades",
        ariaLabel: "Funcionalidades",
      },
      { id: "team", label: "Equipo", ariaLabel: "Equipo" },
      { id: "faq", label: "Preguntas", ariaLabel: "Preguntas" },
      { id: "contact", label: "Contacto", ariaLabel: "Contacto" },
    ],
    []
  );

  // Smooth scroll animado 500ms con offset de navbar
  const smoothScrollTo = (targetY: number, duration = 500) => {
    const startY = window.scrollY;
    const deltaY = targetY - startY;
    const startTime = performance.now();
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeInOutCubic(progress);
      window.scrollTo({ top: startY + deltaY * eased, behavior: "auto" });
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const nav = navRef.current;
    const offset = (nav?.getBoundingClientRect().height ?? 0) + 16; // margen superior de seguridad
    const rect = el.getBoundingClientRect();
    const targetY = window.scrollY + rect.top - offset;
    smoothScrollTo(targetY, 500);
  };

  // IntersectionObserver para resaltar activo (umbral 50%)
  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Seleccionar la entrada con mayor intersección >= 0.5
        let bestId = activeSection;
        let bestRatio = 0;
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio >= 0.5) {
            if (e.intersectionRatio > bestRatio) {
              bestRatio = e.intersectionRatio;
              bestId = (e.target as HTMLElement).id;
            }
          }
        }
        if (bestRatio >= 0.5 && bestId !== activeSection) {
          setActiveSection(bestId);
        }
      },
      { threshold: [0, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  // Debounced scroll y resize como respaldo; evita cálculos repetidos
  useEffect(() => {
    let timeout: number | undefined;
    const onScrollOrResize = () => {
      if (timeout) window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        const vhMid = window.innerHeight / 2;
        let closestId = activeSection;
        let closestDist = Number.POSITIVE_INFINITY;
        for (const i of items) {
          const el = document.getElementById(i.id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const dist = Math.abs(center - vhMid);
          if (dist < closestDist) {
            closestDist = dist;
            closestId = i.id;
          }
        }
        if (closestId !== activeSection) setActiveSection(closestId);
      }, 100);
    };
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (timeout) window.clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, activeSection]);

  return (
    <nav
      ref={navRef}
      aria-label="Navegación principal"
      className={cn(
        "md:block hidden fixed top-8 left-1/2 -translate-x-1/2 w-3/4 h-16 z-50",
        "rounded-2xl border border-primary/30",
        "bg-primary/35",
        "bg-gradient-to-r from-primary/25 via-card/15 to-primary/25",
        "backdrop-blur-md",
        "shadow-xl",
        "transition-all"
      )}
      role="navigation"
    >
      <div className="flex items-center justify-between h-full px-4">
        <div className="inline-flex items-center gap-3" aria-label="Marca">
          <Image
            src="/vita-logo-blanco.png"
            alt="Logo de VITA"
            width={58}
            height={58}
            className={cn("w-[58px] h-[58px] drop-shadow-lg")}
            priority
          />
        </div>
        <ul
          className="flex justify-end items-center h-full m-0 px-3 gap-7 list-none"
          role="list"
        >
          {items.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li
                key={item.id}
                className={cn(
                  "flex transition-transform hover:-translate-y-0.5 focus-within:-translate-y-0.5"
                )}
              >
                <button
                  type="button"
                  className={cn(
                    "group inline-flex items-center justify-center",
                    "min-w-[48px] px-3.5 h-12 rounded-full",
                    "border-0 bg-transparent cursor-pointer",
                    "transition-all",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  )}
                  aria-label={item.ariaLabel}
                  aria-controls={item.id}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => handleNavigate(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleNavigate(item.id);
                    }
                  }}
                >
                  <span
                    className={cn(
                      "text-base leading-none ",
                      isActive
                        ? "font-semibold text-brand"
                        : "text-text-secondary",
                      "transition-colors  group-active:text-brand"
                    )}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
