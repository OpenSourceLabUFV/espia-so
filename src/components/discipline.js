import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

/**
 * Class component to represent a discipline page.
 * Discipline pages are build in the gatsby-node.js file.
 */

export default class Discipline extends Component {
  
    render() {
      const post = this.props.data.markdownRemark
      const sp = post.frontmatter.slug.split('/')
      const editLink = "https://github.com/OpenSourceLabUFV/espia-so/edit/filters/disciplinas/" + sp[2].toUpperCase() + "/README.md"

      return (
        <Layout>
            <h1 className="m-6 font-sans text-2xl font-bold text-left">
                {post.frontmatter.title}
            </h1>
            <div className="prose prose-blue" dangerouslySetInnerHTML={{ __html: post.html }} />
            <a href={editLink} target="_blank" rel="noreferrer" className="mt-8 bg-gray-100 border-gray-50 hover:bg-blue-50">
              Edite essa Página
            </a>
        </Layout>
    )
    }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`