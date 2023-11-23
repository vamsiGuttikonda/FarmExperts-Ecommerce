import React from 'react'
 import '../../components/product-slider/courosel.css'



const Couroselindividual = (props) => {
  return (
    <div className='card-courosel' >
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

export default Couroselindividual
