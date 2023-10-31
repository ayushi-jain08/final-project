import React from 'react'
import { useProductContext } from '../../Context/ProductContext'
import "../AllProduct/AllProduct.scss"
import Card from '../../Components/Products/Card';
import '../../Components/Products/Products.scss';
import Skeleton from '../../Components/Products/Skeleton';

const Product = () => {
  const {products, isLoading } = useProductContext()
 
  return (
    <>
       <div className="product-all featured">
        <div className="container xl featured-product">
        <h1 className='product-header'>All Products</h1>
        {
          isLoading ?  <div className='display-flex'><Skeleton count={12}/> </div> : <div className="product">
              {
          products.map((curElem) => {
            const { id, name, image, price, category} = curElem;
            return <Card key={curElem.id} {...curElem}/>
          })
        }
      </div>
        }
     
       
      
        </div>
      </div>
    </>
  )
}

export default Product
