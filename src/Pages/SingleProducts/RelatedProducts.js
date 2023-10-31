import React from 'react'
import CategoryCard from '../../Components/Category/CategoryCard';
import "../SingleProducts/SingleProducts.scss";

const RelatedProducts = ({related}) => {
  return (
    <>
      <div className="single-category">
        <div className="container">
        <h2 className='heading'>Related Products</h2>
        <div className="category-product">
            {
                related.map((curElem) => {
                    return <CategoryCard key={curElem.id} {...curElem}/>
                })
            }
        </div>
        </div>
      </div>
    </>
  )
}

export default RelatedProducts
