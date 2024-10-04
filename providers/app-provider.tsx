import { ChildrenProps } from "@/types"
import { ThemeProvider } from "./theme-provider"


const AppProvider = ({ children }: ChildrenProps) => {
  return (
   
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
  )
}

export default AppProvider