import React from 'react'
import img from "../Carts/empty.gif"
const EmptyCart = () => {
  return (
    <div className='empty'>
     <img src={img} alt="" />
     <h2>No Item In a Cart</h2>
    </div>
  )
}

export default EmptyCart
