import React from 'react'
import Layout from '../components/layout'
import DiscCard from '../components/discCard'
import { graphql } from 'gatsby'

export default function Disciplinas({data}) {

    let cards = []

    for (let disc of data.allMarkdownRemark.edges)
        cards.push( DiscCard(disc) )
    
    return (
        <Layout>
            <div className="grid grid-flow-row grid-cols-1 auto-rows-max lg:grid-cols-4">
                {cards}
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query {
        allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/README.md/" }
            }
            sort: { fields: [frontmatter___periodo], order: ASC }
        ) {
            edges {
                node {
                    frontmatter {
                        slug
                        title
                        periodo
                    }
                }
            }
        }
    }
`