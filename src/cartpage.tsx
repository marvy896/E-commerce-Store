import React from "react";
import Nav from "../nav";
import useCart from "./hooks/hooks";
import { Link } from "react-router-dom";

export default function Cartpage() {
  let carts = useCart();
  let cartes = carts.cartlog;

  const removebtn = (id: number) => {
    carts.removeProduct(id);
  };
  return (
    <div>
      <Nav />
      <div className="Cartpage">
        <h2>Shopping Cart</h2>
        <div className="carts">
          {cartes.map((CARTS) => (
            <div className="cartdisplay" key={CARTS.productId}>
              <div className="productDisplay">
                Product Name
                <div className="prodDisplay">{CARTS.productName}</div>
              </div>
              <div className="productDisplay">
                Products Quantity
                <div className="prodDisplay"> {CARTS.quantity}</div>
              </div>
              <button onClick={() => removebtn(CARTS.productId)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="btnDisplay">
        <Link to="/productCard">
              <button className="btnBelow" type="button">Return To Store</button>
            </Link>
            <Link to="/checkout">
              <button className="btnBelow" type="button">Proceed to payment</button>
            </Link>
          </div>
      </div>
    </div>
  );
}
