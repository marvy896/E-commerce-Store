import React from 'react';
import Home from "./home"
import ProductCard from './productCard';
import {Route, Routes} from"react-router-dom"

export default function App() {
  return (
    <div>
    <div>
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/productCard' element={<ProductCard/>} />
            <Route path='/' element={<ProductCard/>}/>
        </Routes>
    </div>
    </div>
  )
}
