import React, { Component } from 'react'
import Layout from '../components/layout'
import DiscCard from '../components/discCard'
import { graphql } from 'gatsby'

export default class Disciplinas extends Component {

    // fullCurriculum = []
    // filtered = []

    // constructor (props) {
    //     super(props)
        
    //     for (let disc of props.data.allMarkdownRemark.edges)
    //         this.fullCurriculum.push(new Discipline(disc.node.frontmatter.slug, disc.node.frontmatter.title, disc.node.frontmatter.periodo) )

    //     let discs = []

    //     for (let disc of this.fullCurriculum) 
    //         discs.push(DiscCard(disc))
        
    //     this.state = {
    //         disciplines: [...discs],
    //         sem: ""
    //     }
    // } 

    // popDisc = (i) => {
    //     let discs = []

    //     if (i === "50") {
    //         for (let disc of this.fullCurriculum) discs.push(DiscCard(disc))
    //     } else {
    //         let c = Filter.bySemester(this.fullCurriculum, i)
    //         for (let disc of c) discs.push(DiscCard(disc))
    //     }
        
    //     this.setState({
    //         disciplines: [...discs]
    //     })
    // }

    // handleChangeSemester = event => {
    //     this.setState({sem: event.target.value})
    //     this.popDisc(event.target.value)
    // }

    // getUnique = discs => {
    //     let unique = new Set()
    //     for (let object of discs) unique.add(object.semester)

    //     return [...unique];
    // }

    render() {

        //let unique = this.getUnique(this.fullCurriculum)

        return (
            <Layout>
                {/* <div className="relative inline-flex">
                    <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
                    <select className="h-10 pl-5 pr-10 text-gray-600 bg-white border border-gray-300 rounded-full appearance-none hover:border-gray-400 focus:outline-none" value={this.state.sem} onChange={this.handleChangeSemester}>
                        <option key="Periodo" value="50">Período</option>
                            {unique.map(disc => (
                                <option key={disc} value={disc}>
                                    {disc}
                                </option>
                            ))}
                    </select>
                </div> */}
                {/* <button className="px-3 py-2 m-1 mt-8 text-white bg-blue-800 border-b-4 border-l-2 border-blue-900 rounded shadow-lg hover:shadow-md" onClick={this.popDisc}>
                Filtrar
                </button> */}
                <div className="grid grid-flow-row grid-cols-1 auto-rows-max lg:grid-cols-4">
                    {this.props.data.allMysqlDiscipline.edges.map(({node}, index) => (
                        <DiscCard slug={node.Slug} name={node.Name} code={node.Code}></DiscCard>
                    ))}
                </div>
            </Layout>
        )
    } 
}

export const pageQuery = graphql`
    query {
        allMysqlDiscipline(sort: {fields: Code}) {
            edges {
            node {
                Code
                HasContent
                Name
                Slug
            }
            }
        }
    }
`