import React from "react";
import useCart from '../hooks/hooks';


export type StoreItemProps = {
  id: number;
  nameProduct: string;
  price: number;
  imgUrl: string;
};
export default function StoreItems({
  id,
  nameProduct,
  price,
  imgUrl,
}: StoreItemProps) {
  // let quantity = 0;
  let carts = useCart()
  let quantity = carts.getQuantity(id, nameProduct)
  let addToCart =() =>{
    carts.increaseQuantity(id, nameProduct)
  }
  let removefromCart = () =>{
    carts.decreaseQuantity(id, nameProduct)
  }
  let removeProduct =()=>{
    carts.removeProduct(id)
  }
  return (
    <div className="store-container">
      {/* <img src={imgUrl} className="imgStore" /> */}
      <div className="imgStore" style={{backgroundImage: `url(${imgUrl})`}}></div>
      <div className="prices">
        <h3>{nameProduct}</h3>
        <h3>${price}</h3>
      </div>
      <div>
        {quantity ===0 ? (
            <div className="cartbuttonDiv">
          <button className="cartbutton" onClick={addToCart}>+ Add To Cart</button></div>
        ) : (
          <div>
            <div className="pricesbutton">
              <button onClick={removefromCart}>-</button>
              <div> <span>{quantity}</span> in cart</div>
              <button onClick={addToCart}>+</button>
            </div>
            <div className="divremovebtn">
              <button className="removebtn"onClick={removeProduct}>Remove</button></div>
          </div>
        )}
      </div>
    </div>
  );
}
