import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState();
  let { id } = useParams();

  const getSingleProduct = async () => {
    let data = await axios.get(
      `http://localhost:8080/api/product/getSingleProduct/${id}`
    );
    if (data.data.error === 0) {
      setProduct(data.data.product_detail[0]);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <>
      <img src={`http://localhost:8080/${product.image}`} alt="" />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.detail}</p>
    </>
  );
};

export default ProductDetail;
