import React from 'react'
import './header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-navbar">
      <div className='container'>
        <Navbar.Brand href="#home" className='fs-5'>Ashish</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className='fw-bold'>
            <Nav.Link className='nav_link' href="#home">Home</Nav.Link>
            <Nav.Link className='nav_link' href="#link">About</Nav.Link>
            <Nav.Link className='nav_link' href="#home">Skills</Nav.Link>
            <Nav.Link className='nav_link' href="#link">Qualification</Nav.Link>
            <Nav.Link className='nav_link' href="#home">Projects</Nav.Link>
            <Nav.Link className='nav_link' href="#link">Contact</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </>
  )
}

export default Header
