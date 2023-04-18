import React from "react";
import Nav from "react-bootstrap/Nav";
//import NavDropdown from "react-bootstrap/NavDropdown";

const Heronav = () => {
  return (
    <>
      <Nav className="pt-2 pb-2">
        <Nav.Link href="#features" className="links">
          Posts
        </Nav.Link>
        <Nav.Link href="#pricing" className="links">
          About
        </Nav.Link>
        <Nav.Link href="#pricing" className="links">
          Photos
        </Nav.Link>
        <Nav.Link href="#pricing" className="links">
          Videos
        </Nav.Link>
        {/* <NavDropdown title="More" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Community</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Videos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Events</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">About</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </>
  );
};

export default Heronav;
