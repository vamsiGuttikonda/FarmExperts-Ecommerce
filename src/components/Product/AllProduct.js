import React from 'react'
import {productData} from '../product-slider/productdata'
import IndividualProduct from './IndividualProduct'




const AllProduct = () => {
  return (
    <div className="col-md-9">
      <div className='row'>
      <IndividualProduct productData={productData}/>
      </div>
    </div>
  )
}

export default AllProduct
