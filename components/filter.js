import React from 'react'
import styles from '../styles/Filter.module.css'
import cx from 'classnames'
const Filter = (props) => {
    return (
        <div className={styles.filterContainer} >
            <div className={cx(styles.filterResult, styles.filterDiv)}>
                {props.count} Products
            </div>
            <div className={cx(styles.filterSort, styles.filterDiv)}>
                Order {" "}
                <select value={props.sort} onChange={props.sortProducts}>
                    <option value="">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className={cx(styles.filterSize, styles.filterDiv)}>
                Filter {" "}
                <select value={props.size} onChange={props.filterProducts}>
                    <option value="All">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    )
}

export default Filter