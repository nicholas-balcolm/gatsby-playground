import React from 'react'

export default ({ data }) =>
    <div>
        {data.allContentfulPage.edges.map(({ node }, i) =>
            <div>
                <h1>{node.title}</h1>
                <div>
                    {node.slug}
                </div>
            </div>
        )}
    </div>

export const query = graphql`
    query PageQuery ($slug: String!) {
        allContentfulPage(filter: { slug: { eq: $slug } }) {
            edges {
                node {
                    title
                    slug
                }
            }
        }
    }
`