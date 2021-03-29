import React, { Component } from 'react'
import Layout from '../components/layout'
import DiscCard from '../components/discCard'
import { graphql } from 'gatsby'
import Discipline from '../utils/Discipline'
import Filter from '../utils/filterHandler'

export default class Disciplinas extends Component {

    cards = []

    constructor (props) {
        super(props)
        for (let disc of props.data.allMarkdownRemark.edges) this.cards.push(new Discipline(disc.node.frontmatter.slug, disc.node.frontmatter.title, disc.node.frontmatter.periodo) )

        let discs = []

        for (let disc of this.cards) discs.push(DiscCard(disc))
        
        this.state = {
            disciplines: [...discs]
        }
    } 

    popDisc = () => {
        let c = Filter.bySemester(this.cards, 1)
        let discs = []
        for (let disc of c) discs.push(DiscCard(disc))
        
        this.setState({
            disciplines: [...discs]
        })
    }

    render() {
        
        return (
            <Layout>
                <button className="px-3 py-2 m-1 mt-8 text-white bg-blue-800 border-b-4 border-l-2 border-blue-900 rounded shadow-lg hover:shadow-md" onClick={this.popDisc}>
                Filtrar
                </button>
                <div className="grid grid-flow-row grid-cols-1 auto-rows-max lg:grid-cols-4">
                    {this.state.disciplines}
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