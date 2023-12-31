// ProductSlider component
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CouroselIndividual from './couroselindividual';
import Product_Card from '../Product/Product_Card';
import { responsive, productData } from '../Data/productdata';

const ProductSlider = (props) => {
        // the above props is for heading 
  const product = productData.map((item) => (
    // <CouroselIndividual
    //   name={item.name}
    //   imageurl={item.imageurl}
    //   price={item.price}
    //   description={item.description}
    // />
    <Product_Card product={item}/>
  ));

  return (
    <div className='container-fluid'>
      <h1 className='text-center my-5'>{props.heading}</h1>
      <Carousel showDots={false} responsive={responsive} >
        {product}
      </Carousel>
    </div>
  );
}

export default ProductSlider;
