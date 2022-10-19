import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import useCart from "./hooks/hooks";
// import payment from "./imagepage/payments.jpg"

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function Checkout({ id, name, price, imgUrl }: StoreItemProps) {
  let carts = useCart();
  let cartes = carts.cartlog;
  let cartCheckout = carts.getTotalPrice();

  let submitDetails =(e: FormEvent) =>{
  e.preventDefault();
  let submit = new FormData(e.target as HTMLFormElement)
  submit.forEach(console.log)
 }

  return (
    <div className="checkout">
      <div className="checkout1">
        <h3>Marvel's Fashion</h3>
        <h5>Secure Payment</h5>
      </div>
      <div className="checkoutGrid">
      <form className="formcheck" onSubmit={submitDetails}>
          <label htmlFor="fname">First name:</label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input type="text" id="lname" name="lname"  />
          <br />
          <label htmlFor="Addname">Address:</label>
          <br />
          <input type="text" id="Addname" name="Addname" />
          <br />
          <label htmlFor="PHname">Phone No:</label>
          <br />
          <input type="tel" id="PHname" name="PHname"  />
          <br />
          <label htmlFor="EMname">Email:</label>
          <br />
          <input type="email" id="EMname" name="EMname" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <div className="tableDiv">
        <table>
          <thead>
            <tr>
            <th>Items</th>
            <th>Quantity</th>
            <th>Prices</th>
            </tr>
          </thead>
          <tbody>
          {cartes.map((CARTS) => (
            <tr key={CARTS.productId}>
              <td>{CARTS.productName}</td>
              <td>{CARTS.quantity}</td>
              <td>${CARTS.price}</td>
            </tr>
          ))}
          </tbody>
        </table>
        Total is: ${cartCheckout}
        </div>
      </div>

      <div>
        <Link to="/Home">
          <button className="btnBelow" type="button">
            Return
          </button>
        </Link>
      </div>
      <div className="checkFooter">
        <h5>Reliable Payment Option</h5>
        <div className="data"></div>
      </div>
    </div>
  );
}
