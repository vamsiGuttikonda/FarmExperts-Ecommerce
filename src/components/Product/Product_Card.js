import React, { useContext } from 'react'
import Star from './support-components/Star_Component'
import { MyContext } from '../Context/Context'

const Product_Card = ({product}) => {
       const {cart,setcart} =  useContext(MyContext);

  return (
    <div  className="box">
      <div className="card">
        <div className="image">
          <img src={product.imageurl} alt={product.name} />
        </div>
        <div className="desc">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <span>{product.price}</span>
        </div>
        <div className="star">
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
        </div>
      </div>
      {
        cart.includes(product) ? 
        (
          <button className="add-Button" onClick={()=>{
            setcart(cart.filter((prod)=> product.id!==prod.id ))
          }}>remove from cart</button>
        ):
        (
          <button className="add-Button" onClick={()=>{
            setcart([...cart,product])
          }}>Add to Cart</button>
        )
      }
    </div>
  )
}

export default Product_Card