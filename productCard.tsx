import React from 'react'
import Nav from './nav';
// import {Col, Row} from "react-bootstrap"
import  storeItems from './src/items.json';
import StoreItems from './src/components/StoreItems';


export default function ProductCard() {
  return (
    <div>
      <Nav />
        <h2>Store</h2>
        <div className="store">
        {storeItems.map((item: JSX.IntrinsicAttributes & { id: number; nameProduct: string; price: number; imgUrl: string; }) => (
          <div key ={item.id}>
            <StoreItems {...item}/>
            </div>
        ))}
        </div>
    </div>
    
  )
}


