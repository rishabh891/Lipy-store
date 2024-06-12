"use client"
import styles from './cartItem.module.css'
import { useState ,useEffect} from "react";
import Image from 'next/image';


const Cart = () => {
  
  const [cartItems, setCartItems] = useState([])
  useEffect(()=>{
    const cartItemsFromStorage = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cartItemsFromStorage);
  },[])
  
  const handleQuantityChange = (id, quantity)=>{
    const updatedCartItems = cartItems.map((item)=> 
      item.id === id ? {...item, quantity : Number(quantity)}:item)
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems))
  }

  const handleRemove=(id)=>{
    const updatedCartItems = cartItems.filter(item => item.id !== id);
     setCartItems(updatedCartItems)
     localStorage.setItem('cart', JSON.stringify(updatedCartItems))

  }
  const totalCost = () => {
    let total: number = 0;
    cartItems.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2); // Return the total as a string with two decimal places
  };
  const totalDiscount = () => {
    let total: number = 0;
    cartItems.forEach((item) => {
      total += item.quantity*item.price*item.discountPercentage/100
    });
    return total.toFixed(2); // Return the total as a string with two decimal places
  };

  return (
    <div  className={styles.container}>
      <div className={styles.productonly}>
      {cartItems.map((product) => (
      <div className={styles.items} key={product.id}  >
      <Image src={product.thumbnail} alt='photo' width={200} height={200} className={styles.image}/>
      <div>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.Quantity}>
      
          <h4 className={styles.quantity}>Quantity : {product.quantity}</h4> 
          <input type='number' placeholder="Enter quantity" id="quantity" min={0-product.quantity} value={product.quantity} onChange={(e)=>handleQuantityChange(product.id, e.target.value)}></input>
        </div>
        <div className={styles.price}>
          <del> $ {(product.quantity*product.price).toFixed(2)}</del>
          <h2>$ {(product.quantity*product.price - product.quantity*product.price*product.discountPercentage/100).toFixed(2)}</h2>
          <h5>You save {product.discountPercentage}% </h5>
        </div>
        <button className={styles.remove} onClick={()=>handleRemove(product.id)}>Remove</button>
      </div>
      
      </div>
    ))}
      </div>
      <div className={styles.billing}>
        <h1>Order Summary</h1>
        <h3>Total Cost        =    ${totalCost()}</h3>
        <h3>Total Discount    =    ${totalDiscount()}</h3>
        <h2>Total Bill        =    ${(Number(totalCost())-Number(totalDiscount())).toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default Cart