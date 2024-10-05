import { ReloadIcon } from "@radix-ui/react-icons"

import { Button, ButtonProps } from "@/components/ui/button"

type ButtonLoadingProps = ButtonProps & {
  loading?: boolean,

}

export function ButtonLoading({ loading, children, ...props }: ButtonLoadingProps) {

  if (loading) {
    return (
      <Button disabled {...props}>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        {children}
      </Button>
    )
  }
  return (
    <Button {...props}>
      {children}
    </Button>
  )
}
