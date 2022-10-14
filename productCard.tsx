import React, { FormEvent, useState } from "react";
import Nav from "./nav";
// import {Col, Row} from "react-bootstrap"
import storeItems from "./src/items.json";
import StoreItems from "./src/components/StoreItems";
import { StoreItemProps } from "./src/components/StoreItems";


export default function ProductCard() {
  let [sortArray, setSortedArray] = useState<StoreItemProps[]>([]);
  let [SortedText, setSortedText] = useState("");
  let [maintext, setMainText] = useState("");
  let [text, setText] = useState("");
  let [textDisplay, setTextDisplay] = useState<StoreItemProps[]>([]);
 
  //to sort prices
  const SortPrd = (itemsArray ?:StoreItemProps[]) => {
    itemsArray = itemsArray || storeItems
    let sortPrd = itemsArray.sort((a, b) => a.price - b.price);
    setSortedText(text);
    console.log(sortPrd);
    setSortedArray(sortPrd);
    return sortPrd
  };
  const searchProducts = (e: FormEvent) => {
    e.preventDefault()
    let searchPrd = storeItems.filter(
      (x) =>
        x.nameProduct.toUpperCase().includes(text.toUpperCase()) ||
        x.price <= parseInt(text)
    );
   setTextDisplay(SortPrd(searchPrd));
    setMainText(text);
  };

  return (
    <div>
      <Nav />
      <div className="prdouctCard">
        <h2>Store</h2>
        <form onSubmit={searchProducts}><input
          className="searchInput"
          placeholder="Search something here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button className="searchbtn" onClick={searchProducts}>
          Search
        </button></form>
      </div>
      <div className="store">
        {(maintext == "" ? storeItems : textDisplay).map(
          (
            item: JSX.IntrinsicAttributes & {
              id: number;
              nameProduct: string;
              price: number;
              imgUrl: string;
            }
          ) => (
            <div key={item.id}>
              <StoreItems {...item} />
            </div>
          )
        )}
      </div>
    </div>
  );
}
