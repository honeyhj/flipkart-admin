import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({children, ...rest}) => {
    const user =  useSelector(state=>state)
    console.log(user.check);
    
    return (
        <div>
            <Route
            {...rest}
            render={({location}) => user.authenticate
            ? (children)
            : (<Redirect
                to={{
                pathname: "/signin",
                state: {
                    from: location
                }
            }}/>)}/>
        </div>
    );
};

export default PrivateRoute;