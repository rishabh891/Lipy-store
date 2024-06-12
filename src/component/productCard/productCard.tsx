"use client"
import React from 'react'
import styles from './productCard.module.css'
import Image from 'next/image'
import { useState ,useEffect} from 'react'
import AddtoCart from '../addtocart'
const ProductCard = ({product}) => {
  return (
    
    <div className={styles.container}>
       
        <div className={styles.imageContainer}>
            <Image src={product.thumbnail} alt='photo' width={200} height={200} className={styles.image}/>
        </div>
        <div className={styles.title}>
            <h2>{product.title}</h2>
        </div>
        <div className={styles.addtocart}>
            <div className={styles.price}>
                <h3>$ {product.price}</h3>     
            </div>  
            <AddtoCart product={product}/>
        </div>
        
    
    </div>
  )
}

export default ProductCard