import React from "react";
import Darkmode from "./src/components/darkmode";
import {Link} from "react-router-dom"


export default function Nav() {
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
            <Link to="/productCard">Category</Link>
          </li>
          <li>
            <Link to="/">Promo</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
        <button className="buttonNav">
          <div className="rounded-circle">3</div>
        </button>
      </nav>
      
      <div className="leftContent">
        <h1>WEAR THE BEST</h1>
      </div>
    </div>
  );
}
