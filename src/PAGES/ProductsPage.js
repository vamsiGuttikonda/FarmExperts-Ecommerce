import {React,useState} from 'react'
import CategorySIdebar from '../components/Product/CategorySIdebar'
import { categories } from '../components/Product/categoryData'
import AllProduct from '../components/Product/AllProduct'

const Products = () => {
  
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Category Sidebar on the left */}
        <div className="col-md-3">
          <CategorySIdebar categories={categories}/>
        </div>

        {/* Products on the right */}
        <div className="col-md-9">
          <AllProduct/>
        </div>
      </div>
    </div>

  )
}

export default Products
