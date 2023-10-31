import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
import img from "../WishList/bg.jpg"
import { useProductContext } from '../../Context/ProductContext';
import FormatPrice from '../../Pages/FormatPrice';
import { NavLink } from 'react-router-dom';

const WishItem = (cuElem) => {
    const {removeWishList} = useProductContext()
    const { id, name, image, price, category, description } = cuElem;
  
  return (
    <>
      <div className="cart-products" >
        <div className="cart-product" >
           <div className="img-container">
            <img src={image} alt="" />
           </div>
         
           <div className="prod-details">
           <NavLink to={`/singleproduct/${id}`} >
            <span className='name'>{name}</span>
            </NavLink>
            <AiFillCloseCircle className='close-btn ' onClick={() => removeWishList(id)}/>
            <p>
              <FormatPrice price={price}/>
            </p>
           </div> 
          
        </div>
      </div>
    </>
  )
}

export default WishItem
