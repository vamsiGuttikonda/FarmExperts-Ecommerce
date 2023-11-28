import {React,useState} from 'react'
import CategorySIdebar from '../components/Product/CategorySIdebar'
import { categories } from '../components/Product/categoryData'

const Products = () => {
  
  return (
    <div>

      <CategorySIdebar categories={categories} />
    </div>
  )
}

export default Products
