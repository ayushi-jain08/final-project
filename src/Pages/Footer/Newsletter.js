import React from 'react'
import hat from '../../Assets/Images/hat2.png'
import "../Footer/Footer.scss"
import {AiFillShopping} from "react-icons/ai";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter">
        <div className="content container">
        <div className="left">
            <h2>Sale is Live</h2>
            <p> <strong style={{color:'orangered'}}> Summer Sale  </strong>  is Here at your Door Step 
            <span> <AiFillShopping/></span> 
            </p>
            <h3>Order Now For Exiciting Offers</h3>
            <button>Shop Now</button>
        </div>
        <div className="right">
            <img src={hat} alt="" />
        </div>
        </div>
      </div>
    </>
  )
}

export default Newsletter
