import React, { useState } from 'react'
import hat from '../../Assets/Images/hat2.png'
import {AiFillHeart} from "react-icons/ai";
import "../Products/Products.scss"
import FormatPrice from '../../Pages/FormatPrice';
import { NavLink } from 'react-router-dom';
import { useProductContext } from '../../Context/ProductContext';
import { useCartContext } from '../../Context/Cart_Context';
 
const Card = (curElem) => {
    const { id, name, image, price, category} = curElem;
    const {addToWishList} = useProductContext()
    const {addToCart} = useCartContext()
    const [amount , setAmount] = useState(1)
  return (
    <>
       <div className="product-card">
       <div className="overlay"></div>
        <div className="thumbnail">
            <img src={image} alt=""  style={{height:250}}/>
        </div>
        <div className="wishlist" onClick={() => addToWishList(curElem)}>
        <AiFillHeart/>
        </div>
        <NavLink to={`/singleproduct/${id}`}>
        <div className="prod-details">
            <span className='name'>{name}</span>
            <span className="price"><FormatPrice price={price} /></span>
        </div>
        </NavLink>
        <button className='nav-toggle' >Add To Cart</button>
    </div>
    </>
  )
}

export default Card
