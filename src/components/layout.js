import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav, Footer } from "../components"

const Layout = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
      <Footer />
    </ContainerWrapper>
  )
}

export default Layout
