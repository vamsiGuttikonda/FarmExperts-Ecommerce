import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer'
import BannerSlider from '../components/BannerSlider'
import HomeCategories from '../components/HomeCategories'
import Courosel from '../components/product-slider/courosel'
import ProductSlider from '../components/product-slider/courosel'


const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    
    <BannerSlider></BannerSlider>
    <HomeCategories></HomeCategories>
    <ProductSlider heading="Our Best Selling Products"/>
    <ProductSlider heading="New Arrivals"/>
    
    <Footer></Footer>

    
    </>
  ) 

  
}

export default Home
