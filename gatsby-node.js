const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators
    if (node.internal.type === `ContentfulPage`) {
        console.log({ node, getNode })
        // const slug = createFilePath({ node, getNode, basePath: `pages` })
        // createNodeField({
        //     node,
        //     name: `slug`,
        //     value: slug,
        // })
    }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        graphql(`
        {
          allContentfulPage {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then(result => {
            result.data.allContentfulPage.edges.map(({ node }) => {
                createPage({
                    path: node.slug,
                    component: path.resolve(`./src/templates/page.js`),
                    context: {
                        // Data passed to context is available in page queries as GraphQL variables.
                        slug: node.slug,
                    },
                })
            })
            resolve()
        })
    })
}