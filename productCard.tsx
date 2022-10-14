import React, { FormEvent, useState } from "react";
import Nav from "./nav";
// import {Col, Row} from "react-bootstrap"
import storeItems from "./src/items.json";
import StoreItems from "./src/components/StoreItems";
import { StoreItemProps } from "./src/components/StoreItems";

export default function ProductCard() {
  let [sortItems, setSortItems] = useState("")
  let [maintext, setMainText] = useState("");
  let [text, setText] = useState("");
  let [textDisplay, setTextDisplay] = useState<StoreItemProps[]>([]);

  //to sort prices
  const SortPrd = (itemsArray?: StoreItemProps[]) => {
    itemsArray = itemsArray || storeItems;
    let sortPrd:StoreItemProps[];
    if( sortItems == "LH"){
     sortPrd = itemsArray.sort((a, b) => a.price - b.price);
    }
    else if( sortItems == "HL"){
       sortPrd = itemsArray.sort((b, a) => a.price - b.price);
    }
    else if ( sortItems == "AZ"){
       sortPrd = itemsArray.sort((a, b) => a.nameProduct.localeCompare(b.nameProduct));
    }
    else if ( sortItems == "ZA"){
       sortPrd = itemsArray.sort((b, a) => a.nameProduct.localeCompare(b.nameProduct));
    }
    else if (sortItems == ""){
      sortPrd = itemsArray
    }
    else{
      throw new Error("Invalid sort option: " + sortItems);
    }
    console.log(sortPrd);
    return sortPrd;
  };
  const searchProducts = (e: FormEvent) => {
    e.preventDefault();
    let searchPrd = storeItems.filter(
      (x) =>
        x.nameProduct.toUpperCase().includes(text.toUpperCase()) ||
        x.price <= parseInt(text)
    );
    setTextDisplay(SortPrd(searchPrd));
    setMainText(text);
  };
  let mappedArrays = maintext == "" ? storeItems : textDisplay
  SortPrd(mappedArrays);
  return (
    <div>
      <Nav />
      <div className="prdouctCard">
        <h2>Store</h2>
        <form onSubmit={searchProducts}>
          <input
            className="searchInput"
            placeholder="Search something here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <button className="searchbtn" onClick={searchProducts}>
            Search
          </button>
        </form>
        <div>
          <select value ={sortItems} onChange={(e) =>setSortItems(e.target.value)}>
            <option value="">--Please choose an option--</option>
            <option value="HL">By Price: Highest to Lowest</option>
            <option value="LH">By Price: Lowest to Highest</option>
            <option value="AZ">By Name: A-Z</option>
            <option value="ZA">By Name: Z-A</option>
          </select>
        </div>
      </div>
      <div className="store">
        {(mappedArrays).map(
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
