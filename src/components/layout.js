import React from 'react';
import Header from '../components/header';

export default function Layout({ children }) {
    return (
        <div class="flex flex-col items-center content-center m-10 h-100">
            <Header></Header>
            {children}
        </div>
    )
}