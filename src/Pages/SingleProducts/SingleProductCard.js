import React, { useState } from 'react'
import FormatPrice from "../FormatPrice";
import MyImage from "./MyImage";
import { FaIndent, FaShoppingCart } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import {TbReplace } from "react-icons/tb";
import {MdSecurity } from "react-icons/md";
import "../SingleProducts/SingleProducts.scss";
import { useProductContext } from '../../Context/ProductContext';
import { useNavigate } from 'react-router-dom';
import AmountToggle from './AmountToggle';
import { useCartContext } from '../../Context/Cart_Context';

const SingleProductCard = (SingleProducts) => {
 const {
    id,
    name,
    description,
    image,
    stock,
    price,
  } = SingleProducts;
    const {addToCart} = useCartContext()
    console.log(addToCart)
    const navigate = useNavigate()

    const [amount, setAmount] = useState(1)
    

    const setDecrease = () => {
      amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }
    const setIncrease = () => {
      amount < stock ? setAmount(amount + 1): setAmount(stock)
    }
   
  return (
    <>
       <div className="single-product-content">
        <div className="layout container">
          <div className="single-product-page">
            <div className="left">
              <div className="product-img">
                <MyImage imgs={image} key={id} />
              </div>
            </div>
            <div className="right">
              <h5
                onClick={() => navigate("/")}
                style={{ textTransform: "uppercase" }}
              >
                Home / {name}
              </h5>
              <h3>Special price</h3>
              <div className="details">
                <h4>
                  <FormatPrice price={price} />
                </h4>
                <strike> ₹5000</strike>
                <span>43% off</span>
              </div>
              <div className="color-select">
                <select name="select" id="select">
                  <option value="SelectColor">SelectColor</option>
                  <option value="Black">Black</option>
                  <option value="Blue">Blue</option>
                  <option value="Gray">Gray</option>
                </select>  
              </div>
              <div className="amount-toggle">
                <AmountToggle amount={amount} setIncrease={setIncrease} setDecrease={setDecrease}/>
              </div>
              <div className="desc">
                <h2>
                  Product Details
                  <span>
                    <FaIndent />
                  </span>
                </h2>
                <span> {description}</span>
              </div>
              <div className="buttons">
                <button className="add-cart" onClick={() => addToCart(amount,SingleProducts)}>
                  <FaShoppingCart /> Add To Cart
                </button>
                <button className="buy-btn">
                  <AiFillThunderbolt />
                  Buy Now
                </button>
              </div>
              <hr />
              <div className="icons">
                <div className="delivery">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Free Delivery</p>
                </div>

                <div className="delivery">
                  <TbReplace className="warranty-icon" />
                  <p>30 Days Replacement</p>
                </div>

                <div className="delivery">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Thapa Delivered </p>
                </div>

                <div className="delivery">
                  <MdSecurity className="warranty-icon" />
                  <p>2 Year Warranty </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProductCard
