import React from "react";
import styles from '../styles/ProductList.module.css'
import buttonStyle from '../styles/Button.module.css'

import formatCurrency from './util'

function ProductList(props) {
  const products = props.products
  return (
    <div >
      <ul className={styles.products}>
        {products.map(product =>
          <li key={product._id}>
            <div className={styles.product}>
              <a href={"#" + product._id}>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
              </a>
              <div className={styles.productPrice}>
                <div>{formatCurrency(product.price)}</div>
                <button className={buttonStyle.primary}>Add To Cart</button>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}

export default ProductList;
