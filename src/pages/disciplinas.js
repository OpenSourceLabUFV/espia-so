import React, { Component } from 'react'
import Layout from '../components/layout'
import DiscCard from '../components/discCard'
import { graphql } from 'gatsby'

export default class Disciplinas extends Component {

    cards = []

    constructor (props) {
        super(props)
        for (let disc of props.data.allMarkdownRemark.edges) this.cards.push( DiscCard(disc) )

        this.state = {
            disciplines: [...this.cards]
        }
    } 

    popDisc = () => {
        this.cards.shift();
        
        this.setState({
            disciplines: [...this.cards]
        })
    }

    render() {
        
        return (
            <Layout>
                <button className="px-3 py-2 m-1 mt-8 text-white bg-blue-800 border-b-4 border-l-2 border-blue-900 rounded shadow-lg hover:shadow-md" onClick={this.popDisc}>
                Filtrar
                </button>
                <div className="grid grid-flow-row grid-cols-1 auto-rows-max lg:grid-cols-4">
                    {this.cards}
                </div>
            </Layout>
        )
    } 
}

export const pageQuery = graphql`
    query {
        allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/README.md/" },
                #frontmatter: {hasContent : {eq: true}}
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