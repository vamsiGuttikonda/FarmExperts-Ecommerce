import React from 'react'
import './product-card.css'

const productCard = (props) => {
  return (
    <div className='product-card' >
    <img className="product--image" src={props.imageurl} alt="product image" />
    <h2>{props.name}</h2>
    <p className="price">{props.price}</p>
  <p>{props.description}</p>
    <p>
      <button>Add to Cart</button>
    </p>
  </div>
  )
}

export default productCard
