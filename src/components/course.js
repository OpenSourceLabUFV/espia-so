import { graphql } from "gatsby";
import React, { Component } from 'react'
import Layout from "./layout";
import DiscCard from '../components/discCard'

export default class Course extends Component {
    render() {
         return (
         <Layout>
            <h1>{this.props.pageContext.name}</h1>
            <div className="grid grid-flow-row grid-cols-1 auto-rows-max lg:grid-cols-4">
            {
                this.props.data.allMysqlDiscipline.nodes.map((node, index) => (
                    <DiscCard slug={node.Slug} name={node.Name} code={node.Code}></DiscCard>
                ))
            }
        </div>
         </Layout>
         )
    }
}

export const pageQuery = graphql `
    query ($codes: [String]!) {
        allMysqlDiscipline(filter: {Code: {in: $codes}}) {
            nodes {
                Code
                Name
                Slug
            }
        }
}
` 