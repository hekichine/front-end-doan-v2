import React from "react";
import Banner from "../Banner/Banner";
import ProductList from "../ProductList/ProductList";
import SaleProduct from "../ProductList/SaleProduct";
import Trending from "../ProductList/Trending";
import Shipping from "../Shipping/Shipping";
import Testimonial from "../Testimonial/Testimonial";

const PageContent = () => {
  return (
    <>
      <div className="ms-page-content">
        <Banner />
        <ProductList />
        <Testimonial />
        <SaleProduct />
        <Shipping />
        <Trending />
      </div>
    </>
  );
};

export default PageContent;
