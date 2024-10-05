import Container from "@/components/container/container";
import { ChildrenProps } from "@/types";

const DashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}


export default DashboardLayout