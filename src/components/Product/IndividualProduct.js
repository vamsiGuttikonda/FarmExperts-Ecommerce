import React from 'react'
import ProductCard from './productCard'
import './product-card.css'

const IndividualProduct = ({productData}) => {
   
  return (
    <div className='row'>
        {
        productData.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-7 mb-4 product-container">
            <ProductCard
            imageurl={product.imageurl}
            name={product.name}
            price={product.price}
            description={product.description}
            
            
            />
          </div>
        ))}
      </div>
  )
}

export default IndividualProduct
