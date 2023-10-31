import React from 'react'
import {AiFillHeart} from "react-icons/ai";
import FormatPrice from '../../Pages/FormatPrice';
import { NavLink } from 'react-router-dom';
import { useProductContext } from '../../Context/ProductContext';

const CategoryCard = (curElem) => {
    const { id, name, image, price, category} = curElem;
    const {addToWishList} = useProductContext()
  return (
    <>
       <div className="category-card">
        <div className="thumbnail">
            <img src={image} alt=""  style={{height:250}}/>
        </div>
        <div className="wishlist"  onClick={() => addToWishList(curElem)}>
        <AiFillHeart/>
        </div>
        <NavLink to={`/singleproduct/${id}`}>
        <div className="cat-details">
            <span className='name'>{name}</span>
            <span className="price"><FormatPrice price={price}/></span>
        </div>
        </NavLink>
        <button className='nav-toggle'>Add To Cart</button>
    </div>
    </>
  )
}

export default CategoryCard
