import { Link } from 'gatsby'
import React from 'react'

export default function DiscCard(data) {
    return (
        <div className="m-6">
            <Link to={data.slug}>
                <div className="flex flex-col content-center justify-center h-full bg-gray-50 text-black rounded-md shadow-sm p-8 hover:shadow-md hover:text-white hover:bg-blue-800 origin-left transition all 1.0s ease">
                    <h2 className="text-xl font-semibold">{data.title}</h2>
                    <h3 className="">Período: {data.semester}</h3>
                </div>
            </Link>
        </div>
    )
}