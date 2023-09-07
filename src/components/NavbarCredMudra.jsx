import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Logo from '../assets/logo_animation.gif'
const NavColor={
   color:"#fff"
}
const NavbarCredMudra = () => {
  return (
    <Fragment>
    <Navbar style={{backgroundColor:"#000"}} fixed='top'  expand="lg">
       <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} width={215} height={39} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle style={{backgroundColor:"#ffff"}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:"flex-end"}}>
          <Nav>
            <Nav.Link style={ NavColor} href="#home">Home</Nav.Link>
              <NavDropdown title="Dropdown"  id="basic-nav-dropdown">
              <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </NavDropdown>
            <Nav.Link  style={ NavColor}   href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
  )
}

export default NavbarCredMudra