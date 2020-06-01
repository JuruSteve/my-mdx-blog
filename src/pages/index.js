import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { FeatureImage } from "../components"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FeatureImage />
  </Layout>
)

export default IndexPage
