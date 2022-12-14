import React from 'react';
import Home from "./home"
import ProductCard from './productCard';
import Cartpage from './src/cartpage';
import Checkout from './src/checkout';
import AdminPanel from './src/admin';
import Login from './src/login';
import {Route, Routes} from"react-router-dom"

export default function App() {
  return (
    <div>
    <div>
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/cartpage' element={<Cartpage/>}/>
            <Route path='/productCard' element={<ProductCard/>} />
            <Route path='/admin' element={<AdminPanel/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/checkout' element={<Checkout id={0} name={''} price={0} imgUrl={''}/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
    </div>
  )
}
