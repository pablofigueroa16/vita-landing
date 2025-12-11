"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const bodyOverflowRef = useRef<string | null>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const getNavbarHeight = useCallback(() => {
    if (typeof window === "undefined") return 0;

    const isDesktop = window.innerWidth >= 768;
    const targetRef = isDesktop ? desktopNavRef : mobileNavRef;

    return targetRef.current?.offsetHeight ?? 0;
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

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navbarHeight = getNavbarHeight();
    const padding = 32;
    const targetPosition =
      el.getBoundingClientRect().top + window.scrollY - (navbarHeight + padding);

    setActiveSection(id); // refuerza el estado activo incluso antes del observer
    closeMenu();
    smoothScrollTo(targetPosition);
  };

  useEffect(() => {
    const sectionEls = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => Boolean(el));

    if (!sectionEls.length) return;

    const navbarHeight = getNavbarHeight();

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
  }, [getNavbarHeight]);

  useEffect(() => {
    const body = document.body;

    if (isMenuOpen) {
      bodyOverflowRef.current = body.style.overflow;
      body.style.overflow = "hidden";
    } else if (bodyOverflowRef.current !== null) {
      body.style.overflow = bodyOverflowRef.current;
      bodyOverflowRef.current = null;
    }

    return () => {
      if (bodyOverflowRef.current !== null) {
        body.style.overflow = bodyOverflowRef.current;
      }
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) closeMenu();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 flex justify-center">
        <div className="w-full max-w-6xl px-4">
          {/* Desktop */}
          <div className="hidden md:block">
            <nav
              ref={desktopNavRef}
              aria-label="Navegación principal"
              className={cn(
                "mx-auto mt-6 h-16 w-full max-w-3xl rounded-2xl border border-primary/30",
                "bg-primary/35 bg-linear-to-r from-primary/25 via-card/15 to-primary/25",
                "backdrop-blur-md shadow-xl transition-all"
              )}
              role="navigation"
            >
              <div className="flex h-full items-center justify-between px-4">
                <button
                  onClick={() => handleNavigate("home")}
                  className={cn(
                    "inline-flex items-center gap-3 transition-all duration-300",
                    "hover:scale-105 hover:brightness-110 active:scale-95"
                  )}
                  aria-label="Ir al inicio"
                  type="button"
                >
                  <Image
                    src="/vita-logo-blanco.png"
                    alt="Logo de VITA"
                    width={72}
                    height={72}
                    className="h-[72px] w-[72px] drop-shadow-lg"
                    priority
                  />
                </button>

                <ul
                  className="m-0 flex h-full list-none items-center justify-end gap-7 px-3"
                  role="list"
                >
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                      <li key={item.id} role="listitem">
                        <button
                          onClick={() => handleNavigate(item.id)}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "relative cursor-pointer px-2 py-1 text-base transition-all duration-300",
                            "hover:text-brand/80 focus:outline-none",
                            isActive
                              ? "font-semibold text-brand"
                              : "text-text-secondary"
                          )}
                          type="button"
                        >
                          {item.label}

                          {isActive && (
                            <span
                              className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-brand transition-all duration-300"
                            />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </div>

          {/* Mobile */}
          <div className="pt-4 md:hidden">
            <div
              ref={mobileNavRef}
              className="flex items-center justify-between rounded-2xl border border-primary/30 bg-primary/35 bg-linear-to-r from-primary/25 via-card/15 to-primary/25 px-4 py-3 shadow-xl backdrop-blur-xl"
            >
              <button
                onClick={() => handleNavigate("home")}
                className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02] active:scale-95"
                aria-label="Ir al inicio"
                type="button"
              >
                <Image
                  src="/vita-logo-blanco.png"
                  alt="Logo de VITA"
                  width={56}
                  height={56}
                  className="h-12 w-12 drop-shadow-lg"
                  priority
                />

              </button>

              <button
                onClick={toggleMenu}
                className={cn(
                  "flex items-center justify-center rounded-xl border border-primary/35 p-2",
                  "bg-card/30 text-text transition-all duration-300",
                  "hover:bg-card/50 hover:scale-[1.03] active:scale-95",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                )}
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                type="button"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" strokeWidth={2.2} />
                ) : (
                  <Menu className="h-6 w-6" strokeWidth={2.2} />
                )}
              </button>
            </div>

            <div
              className={cn(
                "relative transition-all duration-300 ease-out",
                isMenuOpen
                  ? "max-h-[440px] translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 max-h-0 opacity-0"
              )}
            >
              <div
                id="mobile-menu"
                className="mt-3 overflow-hidden rounded-2xl border border-primary/30 bg-primary/45 bg-linear-to-b from-primary/30 via-card/20 to-primary/30 shadow-2xl backdrop-blur-2xl"
                role="navigation"
              >
                <ul className="flex flex-col divide-y divide-primary/25" role="list">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                      <li key={item.id} role="listitem">
                        <button
                          onClick={() => handleNavigate(item.id)}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "flex w-full items-center justify-between gap-3 px-4 py-3 text-base font-medium transition-all duration-300",
                            "hover:bg-card/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/70 focus-visible:ring-offset-0",
                            isActive
                              ? "rounded-xl bg-card/25 text-text"
                              : "text-text-secondary"
                          )}
                          type="button"
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={cn(
                                "h-2.5 w-2.5 rounded-full transition-all duration-300",
                                isActive
                                  ? "bg-brand ring-2 ring-brand/40 ring-offset-2 ring-offset-primary/60"
                                  : "bg-primary/45"
                              )}
                            />
                            {item.label}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
        onClick={closeMenu}
      />
    </>
  );
}
