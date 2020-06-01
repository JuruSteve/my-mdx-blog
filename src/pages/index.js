import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { FeatureImage, ContentCard, Content } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FeatureImage />
    <Content>
      <ContentCard
        date="June 1, 2020"
        title="The box-sizing CSS property sets how the total width and height of an element is calculated."
        excerpt="By default in the CSS box model, the width and height you assign to an element is applied only to the element's content box. If the element has any border or padding, this is then added to the width and height to arrive at the size of the box that's rendered on the screen"
        slug="/css-test-post"
      />
    </Content>
  </Layout>
)

export default IndexPage
