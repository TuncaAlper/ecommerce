import React from "react";
import styles from '../styles/Home.module.css'

import data from './data.json'

function ProductList() {
  const products = data.products
  return (
    <div className={styles.grid}>
      <ul >
        {products.map(product =>
          <li key={product._id}>
            <div className={styles.card}>
              <a href={"#" + product._id}>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
              </a>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}

export default ProductList;
