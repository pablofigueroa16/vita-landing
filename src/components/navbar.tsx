import { cn } from "@/lib/utils"
import Image from "next/image"

export default function NavBar() {
  return (
    <nav
      aria-label="Navegación principal"
      className={cn(
        // Layout
        "fixed top-8 left-1/2 -translate-x-1/2 w-1/2 h-16 z-50",
        // Forma y borde
        "rounded-2xl border border-primary/30",
        // Fondo estilo Liquid Glass con paleta personalizada
        "bg-primary/35",
        "bg-gradient-to-r from-primary/25 via-card/15 to-primary/25",
        // Desenfoque de fondo
        "backdrop-blur-md",
        // Sombra para profundidad
        "shadow-xl",
        // Transición suave
        "transition-all"
      )}
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
        <ul className="flex justify-end items-center h-full m-0 px-3 gap-7 list-none" role="list">
          <li className={cn("flex transition-transform hover:-translate-y-0.5 focus-within:-translate-y-0.5")}
              data-active="true">
            <button
              type="button"
              className={cn(
                "group inline-flex items-center justify-center",
                "min-w-[48px] px-3.5 h-12 rounded-full",
                "border-0 bg-transparent cursor-pointer",
                "transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              )}
              aria-label="Home"
              aria-current="page"
            >
              <span className={cn(
                "text-base leading-none",
                "font-semibold",
                "text-brand",
                "transition-colors"
              )}>
                Inicio
              </span>
            </button>
          </li>
          <li className={cn("flex transition-transform hover:-translate-y-0.5 focus-within:-translate-y-0.5")}
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
              aria-label="features"
            >
              <span className={cn(
                "text-base leading-none",
                "text-text-secondary",
                "transition-colors group-hover:text-text group-active:text-brand"
              )}>
                Características
              </span>
            </button>
          </li>
          <li className={cn("flex transition-transform hover:-translate-y-0.5 focus-within:-translate-y-0.5")}
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
              aria-label="About"
            >
              <span className={cn(
                "text-base leading-none",
                "text-text-secondary",
                "transition-colors group-hover:text-text group-active:text-brand"
              )}>
                Acerca de
              </span>
            </button>
          </li>
          <li className={cn("flex transition-transform hover:-translate-y-0.5 focus-within:-translate-y-0.5")}
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
              aria-label="questions"
            >
              <span className={cn(
                "text-base leading-none",
                "text-text-secondary",
                "transition-colors group-hover:text-text group-active:text-brand"
              )}>
                Preguntas
              </span>
            </button>
          </li>
          <li className={cn("flex transition-transform hover:-translate-y-0.5 focus-within:-translate-y-0.5")}
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
              aria-label="contact"
            >
              <span className={cn(
                "text-base leading-none",
                "text-text-secondary",
                "transition-colors group-hover:text-text group-active:text-brand"
              )}>
                Contacto
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}