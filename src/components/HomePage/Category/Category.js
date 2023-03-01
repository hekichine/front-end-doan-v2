import React from "react";
import { Link } from "react-router-dom";

import "./category.css";

const Category = () => {
  return (
    <>
      <section className="ms-show-category">
        <div className="ms-product-container container">
          <div className="ms-product-row row justify-content-center">
            <div className="ms-product-item col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="ms-product-inner ms-pr">
                <div className="ms-product-img">
                  <Link to="#">
                    <img src="./assets/product-show/pr1.png" alt="" />
                  </Link>
                </div>
                <div className="ms-product-detail ms-po">
                  <p className="ms-product-title">new arrivals</p>
                  <p className="ms-product-subtitle">
                    Praesent venenatis metus at tortor
                  </p>
                </div>
              </div>
            </div>
            <div className="ms-product-item col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="ms-product-inner ms-pr">
                <div className="ms-product-img">
                  <Link to="#">
                    <img src="./assets/product-show/pr2.png" alt="" />
                  </Link>
                </div>
                <div className="ms-product-detail ms-po">
                  <p className="ms-product-title">bestseller</p>
                  <p className="ms-product-subtitle">
                    Praesent venenatis metus at tortor
                  </p>
                </div>
              </div>
            </div>
            <div className="ms-product-item col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="ms-product-inner ms-pr">
                <div className="ms-product-img">
                  <Link to="#">
                    <img src="./assets/product-show/pr3.png" alt="" />
                  </Link>
                </div>
                <div className="ms-product-detail ms-po">
                  <p className="ms-product-title">on sale</p>
                  <p className="ms-product-subtitle">
                    Praesent venenatis metus at tortor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
