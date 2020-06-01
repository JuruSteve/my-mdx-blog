import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav, Footer, SEO } from "../components"

const Layout = ({ children }) => {
  return (
    <ContainerWrapper>
      <SEO title="Home" />
      <Nav />
      {children}
      <Footer />
    </ContainerWrapper>
  )
}

export default Layout
