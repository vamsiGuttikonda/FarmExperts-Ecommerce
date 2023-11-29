import React from 'react'
import Couroselindividual from '../product-slider/couroselindividual'



const IndividualProduct = ({productData}) => {
  return (
    <div className='row'>
        {
        productData.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <Couroselindividual
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