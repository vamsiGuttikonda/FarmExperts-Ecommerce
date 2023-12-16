import React from 'react'
// import css files
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// End of  css files
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import page files
import  Home from '../src/PAGES/Home'
import ProductPage from './PAGES/ProductsPage'
import CartPage from './PAGES/CartPage';
import About from '../src/PAGES/About'
import Error from '../src/PAGES/Error'
// import commin components i.e footer ,navbar
import Footer from './components/common/footer';
import Navbar from './components/common/navbar/Navbar'


const App = () => {
  return <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path='/*' element={<Error/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/products' element={<ProductPage/>}/>
    <Route path='/cart' element={<CartPage/>}/>

  </Routes>
  <Footer/>
  </BrowserRouter>
}

export default App
