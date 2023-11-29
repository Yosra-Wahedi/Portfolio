import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import "./Navbar.css"
 function MyNavBar(){
  return(
<>
<Container>
<Navbar fixed="top" bg="warning" expand="sm" >
<Container>
<div className="navbar-brand" href='#' >
  <img src='image/Logo.png' alt="logo" height="80px"/>

</div>
<Navbar.Toggle aria-controls='my-nav'/>
<Navbar.Collapse id="my-nav">
<ul className="navbar-nav mr-auto">
<li className="nav-item">
   <a className="nav-link" href="#home">Home</a>
</li>
<li className="nav-item">
   <a className="nav-link" href="#about">About</a>
</li>
<li className="nav-item">
   <a className="nav-link" href="#skill">Skill</a>
</li><li className="nav-item">
   <a className="nav-link" href="#project">Project</a>
</li><li className="nav-item">
   <a className="nav-link" href="#contact">Contact</a>
</li>
</ul>
</Navbar.Collapse>
</Container>
</Navbar>

    </Container>
</>

  )
}
export default MyNavBar;