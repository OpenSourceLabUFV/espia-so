import { Link } from 'gatsby'
import React, { Component } from 'react'
/**
 * Component to show the Disciplines and Courses in form of clickable cards.
 */

export default class Card extends Component {
    render() {
        return (
            <div className="m-6">
                <Link to={this.props.slug}>
                    <div className="flex flex-col content-center justify-center h-full bg-gray-50 text-black rounded-md shadow-sm p-8 hover:shadow-md hover:text-white hover:bg-blue-800 origin-left transition all 1.0s ease">
                        <h2 className="text-xl font-semibold">{this.props.name}</h2>
                        <h3 className="mt-1">{this.props.code}</h3>
                    </div>
                </Link>
            </div>
        )
    }
}