import React from 'react'
import style from '../styles/Cart.module.css'
import buttonStyle from '../styles/Button.module.css'

import cx from 'classnames'
import formatCurrency from './util'

function Cart(props) {
    const { cartItems, removeFromCart } = props
    return (
        <div>
            {cartItems.length === 0 ? (
                <div className={cx(style.cart, style.cartHeader)}>Cart is empty</div>) : (
                    <div className={cx(style.cart, style.cartHeader)}> You have {cartItems.length} in the cart{" "}</div>
                )}
            <div className={style.cart}>
                <ul className={style.cartItems}>
                    {cartItems.map(item => (
                        <li key={item._id}>
                            <div>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div>
                                <div>{item.title}</div>
                                <div className={style.right}>
                                    {formatCurrency(item.price)} x {item.count} {" "}
                                    <button onClick={() => removeFromCart(item)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {cartItems.length !== 0 && (
                <div className={style.cart}>
                    <div className={style.total}>
                        <div>
                            Total:{" "}
                            {formatCurrency(
                                cartItems.reduce((a, c) => a + c.price * c.count, 0)
                            )}
                        </div>
                    </div>
                    <button className={buttonStyle.primary}>
                        Proceed
                    </button>
                </div>
            )}
        </div>
    )
}

export default Cart;