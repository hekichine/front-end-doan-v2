import React from "react";
import { Link } from "react-router-dom";

import "./category.css";

const Category = () => {
  return (
    <>
      <section className="ms-show-category">
        <div className="ms-cate-container container">
          <div className="ms-cate-row row justify-content-center">
            <div className="ms-cate-item col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="ms-cate-inner ms-pr">
                <div className="ms-cate-img">
                  <Link to="#">
                    <img src="./assets/product-show/pr1.png" alt="" />
                  </Link>
                </div>
                <div className="ms-cate-detail ms-po">
                  <p className="ms-cate-title">new arrivals</p>
                  <p className="ms-cate-subtitle">
                    Praesent venenatis metus at tortor
                  </p>
                </div>
              </div>
            </div>
            <div className="ms-cate-item col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="ms-cate-inner ms-pr">
                <div className="ms-cate-img">
                  <Link to="#">
                    <img src="./assets/product-show/pr2.png" alt="" />
                  </Link>
                </div>
                <div className="ms-cate-detail ms-po">
                  <p className="ms-cate-title">bestseller</p>
                  <p className="ms-cate-subtitle">
                    Praesent venenatis metus at tortor
                  </p>
                </div>
              </div>
            </div>
            <div className="ms-cate-item col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="ms-cate-inner ms-pr">
                <div className="ms-cate-img">
                  <Link to="#">
                    <img src="./assets/product-show/pr3.png" alt="" />
                  </Link>
                </div>
                <div className="ms-cate-detail ms-po">
                  <p className="ms-cate-title">on sale</p>
                  <p className="ms-cate-subtitle">
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
