import { Link } from 'gatsby'
import React from 'react'

export default function DiscCard(data) {
    const { frontmatter, html } = data.node
    return (
        <Link to={frontmatter.slug}>
        <div>
            <h2>{frontmatter.title}</h2>
            <h3>Período: {frontmatter.periodo}</h3>
        </div>
        </Link>
    )
}