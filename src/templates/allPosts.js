import React from "react"
import { graphql } from "gatsby"
import { Content, ContentCard, FeatureImage, Pagination } from "../components"
import Layout from "../components/Layout"
import { H1, P } from "../elements"

const AllPosts = ({ pageContext, data }) => {
  const { currentPage, numPerPage } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPerPage
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges

  return (
    <Layout>
      <FeatureImage />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Lorem ipsum dolor, sit amet.
        </H1>
        <P color="dark2" textAlign="center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quam
        </P>
        {posts.map(post => {
          return (
            <ContentCard
              key={post.node.frontmatter.slug}
              date={post.node.frontmatter.date}
              title={post.node.frontmatter.title}
              excerpt={post.node.frontmatter.excerpt}
              slug={post.node.frontmatter.slug}
            />
          )
        })}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export default AllPosts

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY ")
            excerpt
            slug
            title
          }
        }
      }
    }
  }
`
