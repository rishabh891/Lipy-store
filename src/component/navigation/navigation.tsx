import styles from './navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Navigation = () => {
  return (
    <div className={styles.container}>
        <Link href='/' className={styles.link}>LIPY Store</Link>
        <Link href='/cart' className={styles.cartPage}>
        <Image src='/cart.png' alt=""  className={styles.cart} width={90} height={85} />
        </Link>
    </div>
  )
}
export default Navigation