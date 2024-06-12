import React from 'react'
import { useState, useEffect } from 'react';
const AddtoCart = ({product}) => {
    
    function handleButton(){
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    }
    
  return (
    <div>
      <button onClick={()=> handleButton()}> Add to cart </button>
    </div>
  )
}

export default AddtoCart