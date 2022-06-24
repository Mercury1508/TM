import React,{useState} from "react";
import {Navbar,Container,Nav,Button} from "react-bootstrap"
import logoImg from '../../public/images/logo.png'
import './navbar.css'

function navbar(){
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="light" className="editNavbar">
  <Container>
  <Navbar.Brand href="#home">
    <img src={logoImg} className="logoImg" />
    <span className="navHeading">TeamMaker</span>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className="navLink" href="#features">Home</Nav.Link>
      <Nav.Link className="navLink" href="#pricing">About Us</Nav.Link>
      <Nav.Link className="navLink" href="#pricing">Contact</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"><Button variant="outline-primary">Get Started</Button></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default navbar;