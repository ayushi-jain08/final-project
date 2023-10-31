import React from 'react'
import "./Cart.scss"
import { useProductContext } from '../../Context/ProductContext'
import SingleCartItem from './SingleCartItem'
import { useCartContext } from '../../Context/Cart_Context'
import { NavLink } from 'react-router-dom'
import EmptyCart from './EmptyCart'
import FormatPrice from '../../Pages/FormatPrice'
const Cart = () => {
    // const {cartItem} = useProductContext()
    const {cart,ClearCart, total_price } = useCartContext()

    if(cart.length === 0){
      return(
       <div>
        <EmptyCart/>
       </div>
      )
    }

  return (
    <>
      <div className="cart">
        <div className="container">
            <div className=" cart-heading grid-five-column">
                <p>Item</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
                <p>Remove</p>
            </div>
               <span className='hr'></span>
            <div className="cart-item">
                {
                    cart.map((curElem) => {
                        return <SingleCartItem key={curElem.id} {...curElem}/>
                    })
                }
            </div>
           <div className="cart-two-btn">
           <NavLink to="/product">
           <button className='continue'>Continue Shoppoing</button>
           </NavLink>
           <button className='clear-all' onClick={() => ClearCart()}>Clear Cart</button>
           </div>
           <div className="order-total">
              <div className='sub-total'>
                <span>subTotal :</span>
                <p className='price'>
<FormatPrice price={total_price}/>
                </p>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Cart
