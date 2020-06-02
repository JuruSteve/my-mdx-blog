const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)
  // Create dynamic pagination
  const numPerPage = 2
  const totalPages = Math.ceil(data.allMdx.edges.length / numPerPage)
  Array.from({ length: totalPages }).forEach((_, i) => {
    actions.createPage({
      path: i == 0 ? `/` : `/${i + 1}`,
      component: path.resolve(`./src/templates/allPosts.js`),
      context: {
        limit: numPerPage,
        skip: i * numPerPage,
        numPerPage,
        currentPage: i + 1,
      },
    })

    // Create Single Post Page
    data.allMdx.edges.forEach(edge => {
      const slug = edge.node.frontmatter.slug
      const id = edge.node.id
      actions.createPage({
        path: slug,
        component: path.resolve(`./src/templates/singlePost.js`),
        context: { id },
      })
    })
  })
}
