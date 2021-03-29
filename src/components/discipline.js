import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

export default class Discipline extends Component {
  
    render() {
      const post = this.props.data.markdownRemark
      return (
        <Layout>
            <h1 className="m-6 font-sans text-2xl font-bold text-left">
                {post.frontmatter.title}
            </h1>
            <div className="prose prose-blue" dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    )
    }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`