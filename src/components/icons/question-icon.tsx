import React from "react"
import { cn } from "@/lib/utils"

type QuestionIconProps = React.SVGProps<SVGSVGElement> & {
  title?: string
}

export function QuestionIcon({ className, title, ...props }: QuestionIconProps) {
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
        fill="currentColor"
        d="M1.25 8C1.25 4.27208 4.27208 1.25 8 1.25L16 1.25C19.7279 1.25 22.75 4.27208 22.75 8L22.75 16C22.75 19.7279 19.7279 22.75 16 22.75L8 22.75C4.27208 22.75 1.25 19.7279 1.25 16L1.25 8ZM12 6.24998C12.4142 6.24998 12.75 6.58577 12.75 6.99998L12.75 14.1046C12.75 14.5188 12.4142 14.8546 12 14.8546C11.5858 14.8546 11.25 14.5188 11.25 14.1046L11.25 6.99998C11.25 6.58577 11.5858 6.24998 12 6.24998ZM12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18L12.01 18C12.5623 18 13.01 17.5523 13.01 17C13.01 16.4477 12.5623 16 12.01 16L12 16Z"
      />
    </svg>
  )
}

export default QuestionIcon