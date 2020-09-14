import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Index.module.css'

import ProductList from '../components/productList'
import Filter from '../components/filter'
import data from '../components/data.json'

export default function Home() {
  const [products, setProducts] = useState(data.products)
  const [sort, setSort] = useState("")
  const [size, setSize] = useState("All")

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
            <ProductList products={products} />
          </div>
          <div className={styles.sidebar}>
            Cart Items
        </div>
        </div>
      </main>
      <footer >
        All right is reserved
      </footer>
    </div>
  )
}
