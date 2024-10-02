import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import Product from './Component/Product'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import ProductDetail from './Component/ProductDetails'
import SearchItem from './Component/SearchItems'
import Cart from './Component/Cart'
import { items } from './Component/Data'



const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
    <Router>
    <Navbar cart={cart} setData={setData} />
    <Routes>
      <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
      <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
      <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
    </Routes>

    </Router>
    </>
  )
}

export default App