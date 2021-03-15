import React from 'react';
import './style.css'
import Header from './header'
const Layout = (props) => {
    return (
        <>
            <Header></Header>
            {
                props.sidebar ? (
                    <>
                    <ul>
                        <li>categories</li>
                        <li>products</li>
                        <li>orders</li>
                    </ul>
                    </>
                ):null
            }
            {props.children}
        </>
    );
};

export default Layout;