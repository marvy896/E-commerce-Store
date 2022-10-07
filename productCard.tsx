import React from 'react'
import Navbar from './src/navbar'
// import {Col, Row} from "react-bootstrap"
import  storeItems from './src/items.json';
import StoreItems from './src/components/StoreItems';


export default function ProductCard() {
  return (
    <div>
      <Navbar />
        <h2>Store</h2>
        <div className="store">
        {storeItems.map((item: JSX.IntrinsicAttributes & { id: number; name: string; price: number; imgUrl: string; }) => (
          <div key ={item.id}>
            <StoreItems {...item}/>
            </div>
        ))}
        </div>
    </div>
    
  )
}
