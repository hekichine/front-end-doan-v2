import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

import "./Product.css";

const Product = (props) => {
  let data = props.data;

  return (
    <>
      <div
        className={` col-6 col-md-6 col-lg-4 col-xl-3 ms-product-item `}
        key={data.id}
      >
        <div className="ms-product-inner">
          <div className="ms-product-image ratio-3x4 ratio ms-pr">
            <Link to={`/product/${data.id}`}>
              <img
                className=""
                src={`http://localhost:8080/${data.product_image}`}
                alt=""
              />
            </Link>
            <div className="ms-hover-icon ms-pa">
              <button title="Add to cart">
                <FiShoppingBag />
              </button>
            </div>
            {data.sale === 0 ? (
              <></>
            ) : (
              <>
                <span className="ms-badge">-{data.sale}%</span>
              </>
            )}
          </div>
          <div className="ms-product-content">
            <h3 className="ms-product-title ms-pr">
              <Link to={`/product/${data.id}`} title={data.product_name}>
                {data.product_name}
              </Link>
              <span className="ms-pa ms-tooltip">{data.product_name}</span>
            </h3>
            <p className="ms-product-price">
              {data.sale === 0 ? (
                <>
                  <span className="ms-price">{data.price}$</span>
                </>
              ) : (
                <>
                  <span className="ms-price">
                    {data.price - (data.price * data.sale) / 100}$
                  </span>
                  <span className="ms-main-price">{data.price}$</span>
                </>
              )}
            </p>
            <p className="ms-product-des">{data.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
