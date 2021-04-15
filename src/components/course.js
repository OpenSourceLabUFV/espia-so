import { graphql } from "gatsby";
import React, { Component } from 'react'
import Layout from "./layout";
import Card from '../components/card'

/**
 * Class component to represent a course page.
 * Course pages are build in the gatsby-node.js file.
 */

export default class Course extends Component {

    show = this.props.data.allMysqlDiscipline.nodes;

    relations = this.props.data.mysqlCourse.courseRelations.map((node, index) => {
        return [node.Code, node.Semester]
    })

    state = {
        sem: ""
    }

    handleChangeSemester = event => {
        if (event.target.value === "50") {
            this.show = this.props.data.allMysqlDiscipline.nodes
            this.setState({sem: event.target.value})
            return
        }
        const entries = new Map(this.relations)
        this.show = this.props.data.allMysqlDiscipline.nodes.filter(node => {
            
            const check = entries.get(node.Code)

            if (check != undefined) {
                return check === parseInt(event.target.value)
            }

            return false
        })

        this.setState({sem: event.target.value})
    }

    getUnique = () => {
        let u = new Set()

        for (let disc of this.props.data.mysqlCourse.courseRelations) {
            u.add(disc.Semester)
        }

        this.unique = [...u]
    }
    
    render() {
        this.getUnique()
         return (
         <Layout>
            <h1 className="text-xl font-semibold">{this.props.pageContext.name}</h1>
            <div className="relative inline-flex mt-2">
                    <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
                    <select className="h-10 pl-5 pr-10 text-gray-600 bg-white border border-gray-300 rounded-full appearance-none hover:border-gray-400 focus:outline-none" value={this.state.sem} onChange={this.handleChangeSemester}>
                        <option key="Periodo" value="50">Período</option>
                        {this.unique.map(disc => (
                            <option key={disc.toString()} value={disc.toString()}>
                                {disc.toString()}
                            </option>
                        ))}
                    </select>
            </div>
            <div className="grid grid-flow-row grid-cols-1 auto-rows-max lg:grid-cols-4">
            {
                this.show.map((node, index) => {
                    return (
                        <Card slug={node.Slug} name={node.Name} code={node.Code}></Card>
                    )
                }
                )
            }
            </div>
         </Layout>
         )
    }
}

export const pageQuery = graphql `
    query ($codes: [String]!, $id: Int!) {
        mysqlCourse(ID: {eq: $id}) {
            courseRelations {
                Code
                Semester
            }
        }
        allMysqlDiscipline(filter: {Code: {in: $codes}}) {
            nodes {
                Code
                Name
                Slug
            }
        }
}
` 