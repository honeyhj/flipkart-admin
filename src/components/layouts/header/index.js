import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import { useSelector } from 'react-redux';


const Header = () => {
  // const user = useSelector(state=>state.user.authenticate)
  // if(user.authenticate)
    return (
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Admin DashBoard</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link ><NavLink to="/signup">SingUp</NavLink></Nav.Link>
      <Nav.Link ><NavLink to="/signin">SingIn</NavLink></Nav.Link>
      
    </Nav>
    
  </Navbar>
  
</>
    );
};

export default Header;