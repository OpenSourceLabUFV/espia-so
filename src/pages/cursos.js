import { graphql } from "gatsby";
import React, { Component } from "react";
import DiscCard from "../components/discCard";
import Layout from "../components/layout";

export default class Cursos extends Component {

    render() {
        return (
            <Layout>
                <div className="grid grid-flow-row grid-cols-1 auto-rows-max lg:grid-cols-4">
                    {this.props.data.allMysqlCourse.nodes.map((node, index) => (
                        <DiscCard slug={node.Slug} name={node.Name} code=""></DiscCard>
                    ))}
                </div>
            </Layout>
        )
    }
}

export const pageQuery = graphql`
    query {
        allMysqlCourse {
            nodes {
            ID
            Name
            Slug
            }
        }
    }
`