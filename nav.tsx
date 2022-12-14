import React from "react";
import Darkmode from "./src/components/darkmode";
import {Link} from "react-router-dom"
import useCart from "./src/hooks/hooks";


export default function Nav() {
  let cartinNav= useCart()
let quantityCart = cartinNav.getTotalquantity()
  return (
    <div  className="homepage">
      <nav className="Nav">
        <Link to="/home" className="Site-title">
          Marvel's Fashion
        </Link>
        <Darkmode />
        <ul>
          <li>
            <Link to="/home" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/productCard">Product Category</Link>
          </li>
          <li>
            <Link to="/cartpage">Cartpage</Link>
          </li>
          <li>
            <Link to="/login">Admin</Link>
          </li>
        </ul>
        <button className="buttonNav">
          <div className="rounded-circle">{quantityCart}</div>
        </button>
      </nav>
      
      <div className="leftContent">
        <h1>WEAR THE BEST</h1>
      </div>
    </div>
  );
}
