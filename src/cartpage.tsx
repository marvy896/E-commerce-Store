import React, { useState, useEffect } from "react";
import Nav from "../nav";
import useCart from "./hooks/hooks";

export default function Cartpage() {
  const [items, setItems] = useState<any[]>([])
  let carts = useCart();
  let cartes = carts.cartlog;
  
  const removebtn = (id: number) =>{
    carts.removeProduct(id)
  }

  return (
    <div>
      <Nav />
      <div className="Cartpage">
        <h2>Welcome to your Carts</h2>
        <div className="carts">
          {cartes.map((CARTS) => (
            <div className="cartdisplay" key={CARTS.productId}>
              <div className="productDisplay">Product Name 
                <div className="prodDisplay">{CARTS.productName}</div>
              </div>
              <div className="productDisplay">Products Quantity
              <div className="prodDisplay"> {CARTS.quantity}</div>
              </div>
              <button onClick={() => removebtn(CARTS.productId)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
