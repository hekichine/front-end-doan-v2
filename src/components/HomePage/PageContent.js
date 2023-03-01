import React from "react";
import Banner from "../Banner/Banner";
import ProductList from "../ProductList/ProductList";
import SaleProduct from "../ProductList/SaleProduct";
import Trending from "../ProductList/Trending";
import Shipping from "../Shipping/Shipping";
import Testimonial from "../Testimonial/Testimonial";
import BackToTop from "react-back-to-top-button";
import { IoIosArrowUp } from "react-icons/io";
import Slider from "./Slider/Slider";
import Category from "./Category/Category";

const PageContent = () => {
  return (
    <>
      <div className="ms-page-content">
        <Slider />
        <Category />
        <Banner />
        <ProductList />
        <Testimonial />
        <SaleProduct />
        <Shipping />
        <Trending />
        <BackToTop
          showOnScrollDown
          showAt={100}
          speed={1500}
          easing="easeInOutQuint"
        >
          <span
            className="d-inline-flex justify-content-between align-items-center"
            style={{
              border: "1px solid #000",
              borderRadius: "100%",
              width: "40px",
              height: "40px",
              padding: "5px",
            }}
          >
            <IoIosArrowUp />
          </span>
        </BackToTop>
      </div>
    </>
  );
};

export default PageContent;
