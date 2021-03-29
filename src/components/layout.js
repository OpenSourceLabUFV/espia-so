import React from 'react';
import { Component } from 'react';
import Header from './header';

export default class Layout extends Component {

    render() {
        return (
            <div className="flex flex-col items-center content-center m-10">
                <Header></Header>
                {this.props.children}
            </div>
        )
    }
}