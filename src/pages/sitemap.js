import React from "react"
import Link from 'gatsby-link'

export default ({ data }) =>
    <div>
        <h1>Contentful Pages</h1>
        <ul>
            {data.allContentfulPage.edges.map(({ node }, i) => (
                <li><Link to={'/' + node.slug }> {node.title} </Link></li>
            ))}
        </ul>
    </div>

export const query = graphql`
query PagesQuery {
    allContentfulPage {
        edges {
            node {
                slug
                title
            }
        }
    }
}`