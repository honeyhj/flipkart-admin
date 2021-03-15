import React from 'react';
import { useDispatch } from 'react-redux';
import { userSignOut } from '../redux/actions/userActions';
import Layout from './layouts/Layout';

const Onno = () => {
    const dispatch = useDispatch();
    const logout = () =>{
        dispatch(userSignOut())
    }
    return (
        <Layout sidebar>
            <h2>all categories</h2>
            <button onClick={logout}>logOut</button>
        </Layout>
    );
};

export default Onno;