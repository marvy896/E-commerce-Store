import React from "react";
import { NavLink } from "react-router-dom";
import Darkmode from "../src/components/darkmode";
import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap";

export default function Navbar() {
  return (
    <NavbarBS className="container" >
      <Container className="Navbar2">
        <Nav>
          <Nav.Link to="/home" as={NavLink}>
            Home
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link to="/home" as={NavLink}>
            store
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link to="/home" as={NavLink}>
            Cart
          </Nav.Link>
        </Nav>
      </Container>
      <div className="navup">
      <button className="buttonNav">
          <div className="rounded-circle">0</div>
        </button>
        <Darkmode />
      </div>
      
    </NavbarBS>
  );
}


// className="Navbar2"
//className="container"