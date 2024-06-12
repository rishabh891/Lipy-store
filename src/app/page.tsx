import styles from './homepage.module.css'
import ProductCard from '@/component/productCard/productCard'
const getData = async()=>{
  const res = await fetch('https://dummyjson.com/products')
  if(!res.ok){
    throw new Error("Something went wrong")
  }
  return res.json()
}
const Homepage = async() => {
  const data=await getData()
  return (
    <div className={styles.container}>
    {data.products.map((product) => (
      <div className={styles.product} key={product.id}>
        <ProductCard product={product} />
      </div>
    ))}
  </div>
  )
}

export default Homepage
