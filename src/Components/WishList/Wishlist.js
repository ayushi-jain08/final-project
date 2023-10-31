import React from "react";
import "../WishList/Wishlist.scss";
import { CgClose } from "react-icons/cg";
import { BsCartX } from "react-icons/bs";
import WishItem from "./WishItem";
import { useProductContext } from "../../Context/ProductContext";
import { Navigate, useNavigate } from "react-router-dom";

const Wishlist = ({ Wishlist }) => {
    const {wishlist, clearWishList} = useProductContext()
    const Navigate = useNavigate()

    const returnShop = () => {
      Wishlist(false)
      Navigate("/product")
    
    }
  return (
    <>
      <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
          <div className="cart-header">
            <span className="heading">WishList</span>
            <span className="close-btn" onClick={() => Wishlist(false)}>
              <CgClose />
              <span className="text">Close</span>
            </span>
          </div>

         {
            wishlist.length === 0 ?  ( <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart.</span>
            <button className="return-cta" onClick={returnShop}>RETURN TO SHOP</button>
          </div>) :  <div>{wishlist.map((cuElem) => {
                return <WishItem key={cuElem.id} {...cuElem} />
            })}
            <button className='clear-all' onClick={() => clearWishList()}>Clear All</button>
            </div>
         }

        </div>
      </div>
    
    </>
  );
};

export default Wishlist;
