import { ChildrenProps } from "@/types";
import { cn } from "@/lib/utils"

function TypographyH1({ children, className }: ChildrenProps & { className?: string }) {
  return (
    <h1 className={cn(...["scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className])}>
      {children}
    </h1>
  )
}

function TypographyH2({ children, className }: ChildrenProps & { className?: string }) {
  return (
    <h2 className={cn(...["scroll-m-20 text-xl md:text-3xl font-semibold tracking-tight first:mt-0", className])}>
      {children}
    </h2>
  )
}

function TypographyH3({ children, className }: ChildrenProps & { className?: string }) {
  return (
    <h2 className={cn(...["scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight", className])}>
      {children}
    </h2>
  )
}

function TypographyH4({ children, className }: ChildrenProps & { className?: string }) {
  return (
    <h2 className={cn(...["scroll-m-20 text-md md:text-xl font-semibold tracking-tight", className])}>
      {children}
    </h2>
  )
}

function TypographyP({ children, className }: ChildrenProps & { className?: string }) {
  return (
    <h2 className={cn(...["leading-7", className])}>
      {children}
    </h2>
  )
}

export { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyP }