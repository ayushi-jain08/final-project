import React from "react";
import Card from "./Card";
import "../Products/Products.scss";
import { useProductContext } from "../../Context/ProductContext";
import Skeleton from "./Skeleton";

const FeaturedProducts = () => {
    const { isLoading,  featureProducts} = useProductContext()
    const length = featureProducts.length
    console.log(length)
// console.log(featureProducts)
  return (
    <>
      <div className="featured" style={{ marginBottom: 50 }}>
        <div className="featured-product container">
          <h2 className="heading">Featured Products</h2>
          {
            isLoading ? <div className='display-flex'><Skeleton count={3}/> </div> : <div className="product">
                {
                   featureProducts.map((curElem) => {
                    return <Card key={curElem.id} {...curElem}/>
                   })
                }
           
          </div>
          }
         
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
