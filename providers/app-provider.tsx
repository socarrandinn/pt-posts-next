import { ChildrenProps } from "@/types"
import { ThemeProvider } from "./theme-provider"
import Container from "@/components/container/container"
import { ReactQueryProvider } from "./react-query-provider"



const AppProvider = ({ children }: ChildrenProps) => {
  return (

    <ReactQueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <Container>
          {children}
        </Container>
      </ThemeProvider>
    </ReactQueryProvider>
  )
}

export default AppProvider