import React from 'react'
import {productData} from '../product-slider/productdata'
import IndividualProduct from './IndividualProduct'




const AllProduct = () => {
  return (
    <div>
      
      <IndividualProduct productData={productData}/>
      
    </div>
  )
}

export default AllProduct
