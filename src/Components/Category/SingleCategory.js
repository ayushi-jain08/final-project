import React from 'react'
import { useParams } from 'react-router-dom'
import "../Products/Products.scss"
import { useProductContext } from '../../Context/ProductContext';
import CategoryCard from './CategoryCard';

const SingleCategory = () => {
    const {type} = useParams()
    const {products} = useProductContext()

    const category = products.filter((item) => {
      return  item.category === type
    })

  return (
    <div className='single-category'>
      <div className="container">
        <h2 className='heading'>{type}</h2>
        <div className="category-product">
        {
            category.map((curElem) => {
                return <CategoryCard key={curElem.id} {...curElem}/>
            })
         }
        </div>
    
      </div>
   
    </div>
  )
}

export default SingleCategory
