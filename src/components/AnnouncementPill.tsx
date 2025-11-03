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
        "inline-flex items-center gap-3 sm:gap-4",
        "px-3 sm:px-4 py-2 rounded-2xl",
        "bg-primary/35",
        "bg-gradient-to-r from-primary/25 via-card/15 to-primary/25",
        "backdrop-blur-md",
        "border border-primary/30",
        "shadow-xl",
        "transition-all duration-200 ease-out",
        "hover:bg-card/20 active:bg-card/30",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
        "cursor-pointer",
        className
      )}
      aria-label="Anuncio: New Introducing Nurox 2.0"
      role="note"
      tabIndex={0}
    >
      <span
        className={cn(
          "inline-flex items-center h-8 px-3 rounded-full",
          "text-brand font-semibold",
          "bg-gradient-to-b from-brand/20 to-brand/5",
          "border border-brand/40"
        )}
      >
        New
      </span>

      <ShinyText
              text="Bienvenidos al E-commerce Intelligence"
              disabled={false}
              speed={2}
              className="text-text-secondary font-semibold text-lg sm:text-xl md:text-2xl"
            />

      <span
        className={cn(
          "ml-1 sm:ml-2 inline-flex items-center justify-center",
          "w-8 h-8 rounded-full",
          "border border-primary/30 text-text",
          "transition-colors",
          "group-hover:text-brand group-active:text-brand"
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