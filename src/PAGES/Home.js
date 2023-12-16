import React from 'react'


import BannerSlider from '../components/Courosel/BannerSlider'
import HomeCategories from '../components/Home-Category/HomeCategories'

import ProductSlider from '../components/product-slider/courosel'


const Home = () => {
  return (
    <div >
     
    
    <BannerSlider/>
    <HomeCategories/>
    <ProductSlider heading="Our Best Selling Products"/>
    <ProductSlider heading="New Arrivals"/>
    
   
    </div>
  ) 

  
}

export default Home
