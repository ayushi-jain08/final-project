import React, { useState } from 'react'
import logo from "../Assets/Images/logo3-removebg-preview.png"
import {FaBars, FaSearch, FaShoppingCart} from "react-icons/fa";
import {BsFillPersonFill, BsHeart} from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { useUserAuthContext } from '../Context/UserAuthContext';
import Wishlist from './WishList/Wishlist';
import { useCartContext } from '../Context/Cart_Context';

const NavBar = () => {
    const [showLinks, setshowLinks] = useState(false)
    const [showWishList, setWishList] = useState(false)

    const {cart} = useCartContext()

  return (
    <>
      <nav>
        <div className="nav-center">
            <div className="nav-header">
         <img src={logo} alt="" style={{width:150, height:60, objectFit:'cover'}} />
         <button className={`${showLinks ? "Nactive nav-toggle" :"nav-toggle" }`} onClick={() => setshowLinks(!showLinks)}><FaBars/></button>
            </div>
            <div className={`${showLinks ? 'links-container show-container' : 'links-container'}`}>
                <ul className='links'>
                    <li>
                        <NavLink className="link " to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/product">Product</NavLink>
                    </li>
                </ul>
            </div>
            <ul className='social-icons'>
                <li>
                   <NavLink to="/search">
                        <FaSearch/>
                   </NavLink>   
                </li>

                <li>
                   <NavLink to="/login">
                     <BsFillPersonFill/>
                   </NavLink>
                 </li>

                <li onClick={() => setWishList(!showWishList)}>
                   <NavLink>
                       <BsHeart/>
                   </NavLink>
                </li>

                <li>
                    <span className='shopping-cart'>
                   <NavLink to="/cart">
                       <FaShoppingCart/>
                   </NavLink> 
                   <p className='cart-badge'>{`${cart.length}`}</p>
                   </span>  
                </li>
            </ul>
        </div>
      </nav>
    {showWishList &&  <Wishlist Wishlist={setWishList}/>}
    
    </>
  )
}

export default NavBar
