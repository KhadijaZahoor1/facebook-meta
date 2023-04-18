import React from "react";
import fbLogo from "../../assets/facebook-logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";

const NavEx = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={fbLogo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex form-fields">
              <Form.Control
                type="email"
                placeholder="Email or phone"
                className=""
                aria-label="email"
              />
              <Form.Control
                type="password"
                placeholder="Password"
                className=""
                aria-label="password"
              />
              <Button variant="outline-success" className="login-btn">
                log in
              </Button>
              <Nav.Link href="" className="forget-password">
                Forgotten account?
              </Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavEx;
