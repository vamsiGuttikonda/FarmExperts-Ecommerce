// ProductSlider component
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CouroselIndividual from './couroselindividual';
import { responsive, productData } from './productdata';

const ProductSlider = (props) => {
  const product = productData.map((item) => (
    <CouroselIndividual
      name={item.name}
      imageurl={item.imageurl}
      price={item.price}
      description={item.description}
    />
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
