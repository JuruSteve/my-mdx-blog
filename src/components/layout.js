import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav, Footer } from "../components"
import SEO from "./seo"

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
