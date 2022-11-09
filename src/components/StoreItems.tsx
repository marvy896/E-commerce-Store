import React, { useEffect } from "react";
import { GetProducts } from "../database/frontEnd";
import useCart from '../hooks/hooks';

export interface IItem {
  ProductsId: number;
  ProductName: string;
  ImgUrl: string;
  Price: number
}

export type StoreItemProps = {
  id: number;
  nameProduct: string;
  price: number;
  imgUrl: string;
};


export default function StoreItems({
  ProductsId,
  ProductName,
  Price,
  ImgUrl,
}: IItem) {
  // let quantity = 0;
  let carts = useCart()
  let quantity = carts.getQuantity(ProductsId, ProductName)
  let addToCart =() =>{
    carts.increaseQuantity(ProductsId, ProductName, Price)
  }
  let removefromCart = () =>{
    carts.decreaseQuantity(ProductsId, ProductName)
  }
  let removeProduct =()=>{
    carts.removeProduct(ProductsId)
  }
  return (
    <div className="store-container">
      {/* <img src={imgUrl} className="imgStore" /> */}
      <div className="imgStore" style={{backgroundImage: `url(${ImgUrl})`}}></div>
      <div className="prices">
        <h3>{ProductName}</h3>
        <h3>${Price}</h3>
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
