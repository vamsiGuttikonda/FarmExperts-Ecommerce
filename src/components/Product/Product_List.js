import React from "react";
import './product_card.css'
import {productData} from '../Data/productdata'
import Product_Card from "./Product_Card";


const Product_List = () => {
  const products = productData.map((product) => (
    <Product_Card key={product.id} product={product}/>
  ));

  return(
     
  <div className="mainContainer">{products}</div>
  
  
  )
};

export default Product_List;
