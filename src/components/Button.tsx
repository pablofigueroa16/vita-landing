"use client"

import { cn } from "@/lib/utils"

type Variant = "primary" | "secondary"

type LiquidGlassButtonProps = {
  children: React.ReactNode
  variant?: Variant
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  variant = "primary",
  className,
  onClick,
}: LiquidGlassButtonProps) {
  const base = cn(
    // Layout
    "inline-flex items-center justify-center w-full sm:w-auto min-w-[160px]",
    "px-5 py-2.5 rounded-2xl",
    // Paleta personalizada (globals.css):
    // --color-primary => `primary` (superficie base)
    // --color-card    => `card` (elevación/hover/active)
    // --color-brand   => `brand` (acento/focus ring)
    // --color-text    => `text` (texto principal)
    // Fondo estilo Liquid Glass con tokens
    "bg-primary/35",
    "bg-gradient-to-r from-primary/25 via-card/15 to-primary/25",
    "backdrop-blur-md",
    // Borde y sombra coherentes con navbar
    "border border-primary/30 shadow-xl",
    // Tipografía
    "text-text font-semibold",
    // Interacciones con transición 300ms ease-in-out
    "transition-all duration-300 ease-in-out",
    "hover:bg-card/20 active:bg-card/30",
    "hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]",
    // Accesibilidad: foco visible con color de acento
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
    "cursor-pointer"
  )

  const variants: Record<Variant, string> = {
    primary: cn(
      // Jerarquía: variante primaria con acento de marca
      // --color-brand => `brand`
      "ring-1 ring-brand/40",
      "hover:ring-brand/60",
      "border-2 border-brand/40",
      // Texto ligeramente más enfático en primaria
      "text-text"
    ),
    secondary: cn(
      // Variante secundaria más sutil; mantiene coherencia de sombra
      // Borde: --color-primary => `primary`
      "ring-1 ring-primary/25",
      "border border-primary/25",
      "shadow-lg hover:shadow-xl",
      // Texto secundario por defecto; se realza en hover/active
      "text-text-secondary",
      "hover:text-text active:text-brand"
    ),
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(base, variants[variant], className)}
      // Accesible por teclado y con foco visible (cumple WCAG 2.1 AA)
      aria-pressed={false}
    >
      {children}
    </button>
  )
}