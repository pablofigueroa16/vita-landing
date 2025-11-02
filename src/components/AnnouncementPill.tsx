"use client"

import { cn } from "@/lib/utils"
import ShinyText from "./ShinyText"

type AnnouncementPillProps = {
  className?: string
}

export default function AnnouncementPill({ className }: AnnouncementPillProps) {
  return (
    <div
      className={cn(
        // Container pill
        "inline-flex items-center gap-3 sm:gap-4",
        "px-3 sm:px-4 py-2 rounded-2xl",
        // Liquid Glass background (match navbar)
        "bg-white bg-opacity-90",
        "bg-gradient-to-r from-white/25 via-white/15 to-white/25",
        "backdrop-blur-md",
        // Border + subtle glow (match navbar)
        "border border-white/30 ring-1 ring-white/20",
        // Shadow depth (match navbar)
        "shadow-xl",  
        // Transition
        "transition-all duration-200 ease-out",
        className
      )}
      aria-label="Anuncio: New Introducing Nurox 2.0"
    >
      <span
        className={cn(
          "inline-flex items-center h-8 px-3 rounded-full",
          "text-sky-200 font-semibold",
          "bg-gradient-to-b from-sky-400/20 to-sky-400/5",
          "border border-sky-300/40"
        )}
      >
        New
      </span>

      <ShinyText
              text="Bienvenidos al E-commerce Intelligence"
              disabled={false}
              speed={2}
              className="text-white/90 font-semibold text-lg sm:text-xl md:text-2xl"
            />

      <span
        className={cn(
          "ml-1 sm:ml-2 inline-flex items-center justify-center",
          "w-8 h-8 rounded-full",
          "border border-white/20 text-white/85"
        )}
        aria-hidden="true"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-90"
        >
          <path
            d="M8 16L16 8M16 8H9M16 8V15"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  )
}