import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const PrivateRoute =({component: Component, ...rest}) => {
   
    return <Route {...rest} component={(props) => {
        console.log(props.location.pathname)
        const token = window.localStorage.getItem('token');
        if(token){
            return <Component {...props} />
        }else{
            return <Redirect  to={{
                                pathname: "/signin",
                                state: {
                                    from: props.location.pathname
                                }
                            }}
                             />
        }
    }} />
}







// ({children, ...rest}) => {
//     const user =  useSelector(state=>state.user.authenticate)
//     const token = window.localStorage.getItem('token');
//     console.log(user)
//     return (
        
//             <Route
//             {...rest}
//             render={({location}) => user
//             ? (children)
//             : (<Redirect
//                 to={{
//                 pathname: "/signin",
//                 state: {
//                     from: location
//                 }
//             }}/>)}/>
        
//     );
// };
export default PrivateRoute;
