import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Index.module.css'

import ProductList from '../components/productList'
import Filter from '../components/filter'
import data from '../components/data.json'
import Cart from '../components/cart'

export default function Home() {
  const [products, setProducts] = useState(data.products)
  const [sort, setSort] = useState("")
  const [size, setSize] = useState("All")
  const [cartItems, setCartItems] = useState([])

  const filterProducts = (e) => {
    const value = e.target.value
    if (value === "All") {
      setProducts(data.products)
    } else {
      setSize(value)
      setProducts(data.products.filter(
        product => product.availableSizes.indexOf(value) >= 0
      ))
    }
  }
  const sortProducts = (e) => {
    const value = e.target.value
    setSort(value)
    setProducts(products.slice().sort((a, b) => (
      value === "lowest" ?
        (a.price - b.price) :
        value === "highest" ?
          (b.price - a.price) :
          ((a._id < b._id) ? 1 : -1)
    )))
  }
  const addToCart = (product) => {
    const cartItemsCopy = cartItems.slice()
    let alreadyInCart = false
    cartItemsCopy.forEach((item) => {
      if (item._id === product._id) {
        item.count++
        alreadyInCart = true
      }
    })
    if (!alreadyInCart) {
      cartItemsCopy.push({ ...product, count: 1 })
    }
    setCartItems(cartItemsCopy)
  }
  const removeFromCart = (product) => {
    const cartItemsCopy = cartItems.slice()
    setCartItems(cartItemsCopy.filter(r => r._id !== product._id))
  }
  return (
    <div className={styles.gridContainer}>
      <Head>
        <title>E commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header >
        <a href="/" >Welcome!!</a>
      </header>
      <main >
        <div className={styles.content}>
          <div className={styles.main}>
            <Filter
              count={products.length}
              size={size}
              sort={sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
            <ProductList
              products={products}
              addToCart={addToCart}
            />
          </div>
          <div className={styles.sidebar}>
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          </div>
        </div>
      </main>
      <footer >
        All right is reserved
      </footer>
    </div>
  )
}
