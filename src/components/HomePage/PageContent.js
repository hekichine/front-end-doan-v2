import React from "react";
import Banner from "../Banner/Banner";
import ProductList from "../ProductList/ProductList";
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
        <Trending />
        <Shipping />
      </div>
    </>
  );
};

export default PageContent;
