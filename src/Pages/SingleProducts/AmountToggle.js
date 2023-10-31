import React from 'react'
import { AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
const AmountToggle = ({amount, setDecrease, setIncrease}) => {
  return (
    <>
      <div className="amount">
        <div className="amount-btn">
            <button className='dec' onClick={() => setDecrease()}><AiOutlineMinus/></button>
            <div className="amount-style">{amount}</div>
            <button className='inc' onClick={() => setIncrease()}><AiOutlinePlus/></button>
        </div>
      </div>
    </>
  )
}

export default AmountToggle
