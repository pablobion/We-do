import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export default props =>(
  <div className='menu'>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"><strong>We-do!</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/cards">Cards</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

