import React from 'react'
import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import img4 from '../../assets/images/4.png'
import './HomeCategories.css'

const HomeCategories = () => {
  return (
    
        <>
        <h1 className='text-center mt-5'>Shop by categories</h1>
         <div className='home-categories'>
        
        <div className='container'>
            <img src={img1} alt ='img1'/>
            <div className='content'>
            <h1>Honey At your doorstep</h1>
            <p>shop your vegetables now</p>
        </div>
        </div>
        <div className='container'>
        <img src={img2} alt ='img1'/>
        <div className='content'>
            <h1>dry fruits At your doorstep</h1>
            <p>shop your vegetables now</p>
        </div>
        </div>
        <div className='container'>
        <img src={img3} alt ='img1'/>
        <div className='content'>
            <h1>fruits At your doorstep</h1>
            <p>shop your vegetables now</p>
        </div>
        </div>
        <div className='container'>
        <img src={img4} alt ='img1'/>
        <div className='content'>
            <h1>vegetables At your doorstep</h1>
            <p>shop your vegetables now</p>
        </div>
        </div>
      
    </div>
        </>
   
    
    
    
    
  )
}

export default HomeCategories
