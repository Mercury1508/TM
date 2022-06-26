import React from "react";
import {Navbar,Container,Nav,Button} from "react-bootstrap"
import logoImg from '../../public/images/logo.png'
import './navbar.css'

function navbar(){
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="light" className="editNavbar">
  <Container>
  <Navbar.Brand href="#home">
    <img src={logoImg} className="logoImg" alt="no internet" />
    <span className="navHeading">TeamMaker</span>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className="navLink" href="#features"><span className="homelink">Home</span></Nav.Link>
      <Nav.Link className="navLink" href="#pricing"><span className="homelink">About Us</span ></Nav.Link>
      <Nav.Link className="navLink" href="#pricing"><span className="homelink">Contact</span></Nav.Link>
    </Nav>
    <Nav>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default navbar;