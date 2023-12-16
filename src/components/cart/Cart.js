import React, { useContext, useEffect } from 'react'
import Item from './Item'
import {productData} from '../../components/Data/productdata'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context/Context';
import { useState } from 'react';

const Cart = () => {
    const {cart,setcart}=useContext(MyContext);
    const [total, settotal] = useState();
    //using useeffect to calculate total
    useEffect(()=>{
        //the function to run
        {
          settotal(cart.reduce((acc,element)=>{
            return acc+Number(element.price);
        },0));
        }
      },[cart])


    const navigate=useNavigate();
    const  handleBackNavigation=()=>{
        if(navigate.length>1){
            navigate(-1);
        }else{
            navigate("/");
        }
    }


  return (
    <>
        <header>
            <div className='continue-shopping'  onClick={handleBackNavigation}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" className='arrow-icon'/>
                </svg>
            <h3>Continue shopping</h3>

            </div>
            <div className='cart-icon'>
                <svg className='' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <p>{cart.length}</p>
            </div>
        </header>
        <section className='main-cart-section'>
            <h1>shopping cart</h1>
            <p className='total-items'>you have <span className='total-items-count'>7</span>items in your cart </p>


            <div className='cart-items'>
                <div className='cart-items-container'>
                    
                {cart.map((item) => (
              <Item productImage={item.imageurl} productName={item.name} productPrice={item.price}  />
            ))}

                    
                    
                    </div>

                </div>

            
            <div className='card-total'>
                <h3> Cart Total:<span>{total}</span></h3>
                <button> checkout</button>

            </div>
        </section>
    </>
  )
}

export default Cart
