import React from 'react'
import Navbar from '../src/components/Navbar/Navbar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../src/PAGES/About'
import  Home from '../src/PAGES/Home'
import Error from '../src/PAGES/Error'
import Singleproduct from '../src/PAGES/Singleproduct'

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path='/*' element={<Error/>}/>
    <Route path='/about' element={<About/>}/>

  </Routes>
  </BrowserRouter>
}

export default App
