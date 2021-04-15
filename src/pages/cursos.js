import { graphql } from "gatsby";
import React, { Component } from "react";
import Card from "../components/card";
import Layout from "../components/layout";

/**
 * Class component to show all the Courses registered.
 */

export default class Cursos extends Component {

    render() {
        return (
            <Layout>
                <div className="grid grid-flow-row grid-cols-1 auto-rows-max lg:grid-cols-4">
                    {this.props.data.allMysqlCourse.nodes.map((node, index) => (
                        <Card slug={node.Slug} name={node.Name} code=""></Card>
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