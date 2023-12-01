import {React,useState} from 'react'
import CategorySIdebar from '../components/Product/CategorySIdebar'
import { categories } from '../components/Product/categoryData'
import AllProduct from '../components/Product/AllProduct'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer'
import '../components/Product/allProduct.css'

const Products = () => {
  
  return (
    <div>
      <Navbar/>
    <div className="container-fluid mt-5">
      <div className="row">
        {/* Category Sidebar on the left */}
        <div className="col-2 categorysidebar-container">
          <CategorySIdebar categories={categories}/>
        </div>

        {/* Products on the right */}
        <div className="col-10">
          <AllProduct/>
        </div>
      </div>
    </div>
    <Footer/>

    </div>
    
  )
}

export default Products
