import React from 'react'
import Layout from '../components/layout'
import DiscCard from '../components/discCard'
import { graphql } from 'gatsby'

export default function Disciplinas({data}) {

    let cards = []

    for (let i = 0; i < 2; i++) {
        let a = data.allMarkdownRemark.edges[i]
        cards.push( DiscCard(a) )
    }
    return (
        <Layout>
            {cards}
        </Layout>
    )
}

export const pageQuery = graphql`
    query {
        allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/README.md/" }
            }
            sort: { fields: [frontmatter___title], order: ASC }
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