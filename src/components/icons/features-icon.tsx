import React from "react"
import { cn } from "@/lib/utils"

type FeaturesIconProps = React.SVGProps<SVGSVGElement> & {
  title?: string
}

export function FeaturesIcon({ className, title, ...props }: FeaturesIconProps) {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.75 17.5C7.75 17.0858 7.41421 16.75 7 16.75H2C1.58579 16.75 1.25 17.0858 1.25 17.5C1.25 17.9142 1.58579 18.25 2 18.25H7C7.41421 18.25 7.75 17.9142 7.75 17.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.25 6.5C16.25 6.08579 16.5858 5.75 17 5.75H22C22.4142 5.75 22.75 6.08579 22.75 6.5C22.75 6.91421 22.4142 7.25 22 7.25H17C16.5858 7.25 16.25 6.91421 16.25 6.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.75 17.5C22.75 17.0858 22.4142 16.75 22 16.75H13C12.5858 16.75 12.25 17.0858 12.25 17.5C12.25 17.9142 12.5858 18.25 13 18.25H22C22.4142 18.25 22.75 17.9142 22.75 17.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.25 6.5C1.25 6.08579 1.58579 5.75 2 5.75H11C11.4142 5.75 11.75 6.08579 11.75 6.5C11.75 6.91421 11.4142 7.25 11 7.25H2C1.58579 7.25 1.25 6.91421 1.25 6.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.25 15.5C6.25 14.5335 7.0335 13.75 8 13.75H12C12.9665 13.75 13.75 14.5335 13.75 15.5V19.5C13.75 20.4665 12.9665 21.25 12 21.25H8C7.0335 21.25 6.25 20.4665 6.25 19.5V15.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.75 4.5C17.75 3.5335 16.9665 2.75 16 2.75H12C11.0335 2.75 10.25 3.5335 10.25 4.5V8.5C10.25 9.4665 11.0335 10.25 12 10.25H16C16.9665 10.25 17.75 9.4665 17.75 8.5V4.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default FeaturesIcon