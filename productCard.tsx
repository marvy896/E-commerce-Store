import React, { FormEvent, useEffect, useState } from "react";
import Nav from "./nav";
// import {Col, Row} from "react-bootstrap"
// import storeItems from "./src/items.json";
import StoreItems from "./src/components/StoreItems";
import { StoreItemProps, IItem } from './src/components/StoreItems';
import { Link } from "react-router-dom";
import { GetProducts } from "./src/database/frontEnd";

export default function ProductCard() {
  let [storeItems, setStoreItems] = useState<IItem[]>([]);
  let [sortItems, setSortItems] = useState("")
  let [maintext, setMainText] = useState("");
  let [text, setText] = useState("");
  let [textDisplay, setTextDisplay] = useState<IItem[]>([]);

  //to sort prices
  const SortPrd = (itemsArray?: IItem[]) => {
    itemsArray = itemsArray || storeItems;
    let sortPrd:IItem[];
    if( sortItems == "LH"){
     sortPrd = itemsArray.sort((a, b) => a.Price - b.Price);
    }
    else if( sortItems == "HL"){
       sortPrd = itemsArray.sort((b, a) => a.Price - b.Price);
    }
    else if ( sortItems == "AZ"){
       sortPrd = itemsArray.sort((a, b) => a.ProductName.localeCompare(b.ProductName));
    }
    else if ( sortItems == "ZA"){
       sortPrd = itemsArray.sort((b, a) => a.ProductName.localeCompare(b.ProductName));
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
        x.ProductName.toUpperCase().includes(text.toUpperCase()) ||
        x.Price <= parseInt(text)
    );
    setTextDisplay(SortPrd(searchPrd));
    setMainText(text);
  };
  let mappedArrays = maintext == "" ? storeItems : textDisplay
  SortPrd(mappedArrays);

  useEffect(() =>{
    GetProducts(({rows}) => {
      setStoreItems(rows)
    });
  }, [])

  return (
    <div className="productdisplay">
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
            item: JSX.IntrinsicAttributes & IItem
          ) => (
            <div key={item.ProductsId}>
              <StoreItems {...item} />
            </div>
          )
        )}
      </div>
      <div>
            <Link to="/cartpage">
              <button className="btnBelow" type="button">Confirm Order!</button>
            </Link>
          </div>
    </div>
  );
}
