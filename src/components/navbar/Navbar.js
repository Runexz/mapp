import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';
// import { NavLink } from 'react-router-dom';

const NavbarHeading = () => {
    return(
        <Navbar className="navBg" variant="dark" expand="lg">
  <Navbar.Brand href="/">City Alarm</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        // <nav>
        //     <ul>
        //         <li>
        //             <NavLink to="/">Home</NavLink>
        //         </li>
        //         <li>
        //             <NavLink to="/services">Services</NavLink>
        //         </li>
        //         <li>
        //             <NavLink to="/about">About</NavLink>
        //         </li>
        //     </ul>
        // </nav>
    )

};

export default NavbarHeading;