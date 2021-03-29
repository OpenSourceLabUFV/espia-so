import { Link } from 'gatsby';
import React from 'react';

export default function Header() {
    return (
        <Link to="/">
            <header className="items-center max-w-screen-md">
            <div className="flex content-center mb-8 text-center">
                <span className="w-12 mr-4">
                <img className="" src="https://svgshare.com/i/VET.svg" alt=""/>
                </span>
                    <h1 className="font-sans text-4xl font-bold"> Espia Só </h1>
                </div>
            </header>
        </Link>
    )
}