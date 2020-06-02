import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1, P } from "../elements"
import Layout from "../components/Layout"
import { Post, FeatureImage } from "../components"

const SinglePost = ({ data }) => {
  const featureImage =
    typeof data.mdx.frontmatter.featureImage === "object"
      ? data.mdx.frontmatter.featureImage.childImageSharp.fixed
      : data.mdx.frontmatter.featureImage
  console.log("SinglePost", featureImage)
  return (
    <Layout>
      <FeatureImage fixed={featureImage} />
      <Post>
        <H1 margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H1>
        <P margin="0 0 2rem 0">{data.mdx.frontmatter.date}</P>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
    </Layout>
  )
}

export default SinglePost

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        excerpt
        slug
        title
        featureImage {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
