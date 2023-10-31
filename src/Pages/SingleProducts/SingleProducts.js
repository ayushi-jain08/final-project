import React, { useEffect } from "react";
import { useProductContext } from "../../Context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import "../SingleProducts/SingleProducts.scss";
import SingleProductCard from "./SingleProductCard";
import RelatedProducts from "./RelatedProducts";
import Review from "../Review/Review";


const API = "https://api.pujakaitem.com/api/products";
const SingleProducts = () => {
  const { getSingleProduct, singleProduct, isSingleLoading, products } =
    useProductContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    name,
    description,
    image,
    company,
    stock,
    price,
  } = singleProduct;
  // console.log(singleProduct);
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  },[id]);
  if (isSingleLoading) {
      return <div className="page_loading">.....Loading</div>;
    }
  const related = products.filter((item) => item.company === company)
  return (
    <>
     <SingleProductCard  {...singleProduct} />
    <Review/>
    <RelatedProducts related={related}/>

    </>
  );
};

export default SingleProducts;
