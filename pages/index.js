import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ProductList from '../components/productList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        Welcome!!
      </header>
      <main >
        <div className={styles.main}>
          <ProductList />
        </div>
        <div className={styles.sidebar}>
          Cart Items
        </div>
      </main>
      <footer className={styles.footer}>
        All right is reserved
      </footer>
    </div>
  )
}
