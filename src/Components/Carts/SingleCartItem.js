import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {FaTrash } from "react-icons/fa";
import FormatPrice from '../../Pages/FormatPrice';
import AmountToggle from '../../Pages/SingleProducts/AmountToggle';
import { useCartContext } from '../../Context/Cart_Context';
import { NavLink } from 'react-router-dom';
const SingleCartItem = (curElem) => {
    const {id, name, image, price, stock, amount} = curElem;
    const {removeCart, setIcrement, setDecrement} = useCartContext()

    //  const [amount, setAmount] = useState(1)

    const setDecrease = () => {
      // amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }
    const setIncrease = () => {
      // amount < 15 ? setAmount(amount + 1): setAmount(15)
    }
  return (
    <>
      <div className="cart-heading grid-five-column df">
      <NavLink to={`/singleproduct/${id}`}>
        <div className="cart-image--name">
            <div className="img">
                <img src={image} alt="" />
            </div>
            <p className='name'>{name}</p>
        </div>
        </NavLink>
        <span className='price'>
          <FormatPrice price={price}/>
        </span>
       <div>
        <AmountToggle amount={amount} setDecrease={() => setDecrement(id)} setIncrease={() => setIcrement(id)}/>
       </div>
   <span className='total'>
    <FormatPrice price={price * amount}/>
   </span>
   <span className='trash' onClick={() => removeCart(id)}><FaTrash/></span>
      </div>
    </>
  )
}

export default SingleCartItem
