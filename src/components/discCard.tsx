import { Link } from 'gatsby'
import React from 'react'

export default function DiscCard(data) {
    const { frontmatter, html } = data.node
    return (
        <div className="m-6">
            <Link to={frontmatter.slug}>
                <div className="flex flex-col content-center justify-center h-full bg-gray-50 text-black rounded-md shadow-sm p-8 hover:shadow-md hover:text-white hover:bg-blue-800 origin-left transition all 1.0s ease">
                    <h2 className="text-xl font-semibold">{frontmatter.title}</h2>
                    <h3 className="">Período: {frontmatter.periodo}</h3>
                </div>
            </Link>
        </div>
    )
}