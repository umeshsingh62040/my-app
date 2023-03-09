import React from 'react'
import Nav from 'react-bootstrap/Nav';


function Nav1() {
  return (
  <div className='container-fluid'>
     <Nav>
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="AboutUs">AboutUs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="ContactUs">ContectUs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="Services">Services</Nav.Link>
      </Nav.Item>
    </Nav>
  </div>

    
  );
}

export default Nav1;
