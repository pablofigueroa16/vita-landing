import React from "react"
import { cn } from "@/lib/utils"

type HomeIconProps = React.SVGProps<SVGSVGElement> & {
  title?: string
}

export function HomeIcon({ className, title, ...props }: HomeIconProps) {
  const labelled = Boolean(title)
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={labelled ? "img" : "presentation"}
      aria-hidden={labelled ? undefined : true}
      aria-label={labelled ? title : undefined}
      className={cn("w-6 h-6", className)}
      {...props}
    >
      {labelled ? <title>{title}</title> : null}

      <g clipPath="url(#clip0_1_133)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="currentColor"
          d="M14.469 2.16334C13.0553 0.926673 10.9447 0.926672 9.53099 2.16334L2.87259 7.98786C1.84148 8.88984 1.25 10.1931 1.25 11.563L1.25 20C1.25 22.0711 2.92893 23.75 5 23.75L19 23.75C21.0711 23.75 22.75 22.0711 22.75 20L22.75 11.563C22.75 10.1931 22.1585 8.88984 21.1274 7.98786L14.469 2.16334ZM11.25 19C11.25 19.4142 11.5858 19.75 12 19.75C12.4142 19.75 12.75 19.4142 12.75 19L12.75 16C12.75 15.5858 12.4142 15.25 12 15.25C11.5858 15.25 11.25 15.5858 11.25 16L11.25 19Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_133">
          <rect width="24" height="24" fill="white" transform="translate(0 24) rotate(-90)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default HomeIcon