import Head from 'next/head'
import styles from '../styles/Index.module.css'

import ProductList from '../components/productList'

export default function Home() {
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
            <ProductList />
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
