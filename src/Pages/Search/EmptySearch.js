import React from 'react'
import img from '../Search/search (2).gif'
import "./Search.scss"
const EmptySearch = () => {
  return (
    <div className='empty-search'>
     <img src={img} alt="" />
     <h2>No Item In a Cart</h2>
    </div>
  )
}

export default EmptySearch
