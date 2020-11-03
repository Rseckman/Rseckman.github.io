import React from "react";
import { Navbar, Nav } from "react-bootstrap";


function Navigation() {
  
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Ryan Seckman</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }

export default Navigation;




