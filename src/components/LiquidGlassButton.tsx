"use client"

import { cn } from "@/lib/utils"

type Variant = "primary" | "secondary"

type LiquidGlassButtonProps = {
  children: React.ReactNode
  variant?: Variant
  className?: string
  onClick?: () => void
}

export default function LiquidGlassButton({
  children,
  variant = "primary",
  className,
  onClick,
}: LiquidGlassButtonProps) {
  const base = cn(
    // Layout
    "inline-flex items-center justify-center w-full sm:w-auto min-w-[160px]",
    "px-5 py-2.5 rounded-2xl",
    // Liquid Glass (match navbar)
    "bg-white bg-opacity-90",
    "bg-gradient-to-r from-white/25 via-white/15 to-white/25",
    "backdrop-blur-md",
    // Border + glow + shadow
    "border border-white/30 shadow-xl",
    // Typography
    "text-white/90 font-semibold",
    // Interactions
    "transition-all duration-200 ease-out",
    "hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
  )

  const variants: Record<Variant, string> = {
    primary: cn(
      // Slight accent for hierarchy
      "ring-1 ring-sky-300/40",
      "hover:ring-sky-300/60",
      "border-2 border-sky-300/40"
    ),
    secondary: cn(
      // More subtle accent
      "ring-1 ring-white/15",
      "shadow-lg hover:shadow-xl"
    ),
  }

  return (
    <button type="button" onClick={onClick} className={cn(base, variants[variant], className)}>
      {children}
    </button>
  )
}