import React from 'react'
import { Link } from 'react-router-dom';
import Nav from './nav';
import cartpage from './src/cartpage';

export default function Home() {
  return (
    <div>
       <Nav />
       <section>
      <h2>Online Experiences</h2>
      <div className='homeImage'>
        
       <div className='fashion1'><h2 className='fashionH2'>Select Products</h2>
       <Link to="/productCard">
       <button className='fashionButton'>Click Here</button></Link></div> 
       <div className='fashion2'><h2 className='fashionH2'>Visit Your Cart</h2>
       <Link to="/Cartpage">
       <button className='fashionButton'>Click Here</button></Link></div> 
       <div className='fashion3'><h2 className='fashionH2'> Complete Your Order</h2>
       <Link to="/Checkout">
       <button className='fashionButton'>Click Here</button></Link></div> 
      </div>
      <p>Join millions of people world WIde in enjoying all 
        kinds of services without leaving home</p>
    </section>
    </div>
    
  )
}
