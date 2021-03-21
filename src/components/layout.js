import React from 'react';

export default function Layout({ children }) {
    return (
        <div class="m-10">
            <div class="flex items-center mb-8">
                <img class="w-14 mr-4" src="https://svgshare.com/i/VET.svg" alt=""/>
                <h1> Espia Só </h1>
            </div>
            {children}
        </div>
    )
}