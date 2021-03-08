import React from 'react';
import './style.css'
import Header from './header'
const Layout = (props) => {
    return (
        <>
            <Header></Header>
            {props.children}
        </>
    );
};

export default Layout;