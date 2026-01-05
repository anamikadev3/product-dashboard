import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Product from './Component/Product'
import Favorites from './Component/Favorites'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/favorites' element={<Favorites />} />
    </Routes>
  )
}

export default App
