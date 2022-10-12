import React from "react";
import { NavLink } from "react-router-dom";
import Darkmode from "../src/components/darkmode";
import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import useCart from "./hooks/hooks";


type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function Navbar({id,
  name,
  price,
  imgUrl}:StoreItemProps) {
    
let cartinNav= useCart()
let quantityCart = cartinNav.getTotalquantity()

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
          <Nav.Link to="/cartpage" as={NavLink}>
            Cart
          </Nav.Link>
        </Nav>
      </Container>
      <div className="navup">
      <button className="buttonNav">
          <div className="rounded-circle">{quantityCart}</div>
        </button>
        <Darkmode />
      </div>
      
    </NavbarBS>
  );
}


// className="Navbar2"
//className="container"