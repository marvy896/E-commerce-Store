import React from "react";
import useCart from '../hooks/hooks';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export default function StoreItems({
  id,
  name,
  price,
  imgUrl,
}: StoreItemProps) {
  // let quantity = 0;
  let carts = useCart()
  let quantity = carts.getQuantity(id)
  let addToCart =() =>{
    carts.increaseQuantity(id)
  }
  return (
    <div className="store-container">
      {/* <img src={imgUrl} className="imgStore" /> */}
      <div className="imgStore" style={{backgroundImage: `url(${imgUrl})`}}></div>
      <div className="prices">
        <h3>{name}</h3>
        <h3>${price}</h3>
      </div>
      <div>
        {quantity ===0 ? (
            <div className="cartbuttonDiv">
          <button className="cartbutton" onClick={addToCart}>+ Add To Cart</button></div>
        ) : (
          <div>
            <div className="pricesbutton">
              <button>-</button>
              <div> <span>{quantity}</span> in cart</div>
              <button>+</button>
            </div>
            <div className="divremovebtn">
              <button className="removebtn">Remove</button></div>
          </div>
        )}
      </div>
    </div>
  );
}
