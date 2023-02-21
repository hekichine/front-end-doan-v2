import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import CurrencyFormat from "react-currency-format";

const Product = (props) => {
  const dispatch = useDispatch();
  let product = props.data;
  const cart = useSelector((state) => state.cart);

  const handleAddCart = () => {
    let check = cart.some((item) => item.id === product.id);
    if (check) {
      toast.info("🦄 The product is already in the cart!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    let action = {
      ...product,
      count: 1,
    };
    dispatch(addCart(action));
    toast.success("Add to cart success!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return;
  };

  return (
    <>
      <div
        className={` col-6 col-md-6 col-lg-4 col-xl-3 ms-product-item `}
        key={product?.id}
      >
        <div className="ms-product-inner">
          <div className="ms-product-image ratio-3x4 ratio ms-pr">
            <Link to={`/product/${product?.id}`}>
              <img
                className=""
                src={`http://localhost:8080/${product?.product_image}`}
                alt=""
              />
            </Link>
            <div className="ms-hover-icon ms-pa">
              <button
                className="btn-cart"
                title="Add to cart"
                onClick={() => handleAddCart()}
              >
                <FiShoppingBag />
              </button>
            </div>
            {product?.sale === 0 ? (
              <></>
            ) : (
              <>
                <span className="ms-badge">-{product?.sale}%</span>
              </>
            )}
          </div>
          <div className="ms-product-content">
            <h3 className="ms-product-title ms-pr">
              <Link
                to={`/product/${product?.id}`}
                title={product?.product_name}
              >
                {product?.product_name}
              </Link>
              <span className="ms-pa ms-tooltip">{product?.product_name}</span>
            </h3>
            <p className="ms-product-price">
              {product?.sale === 0 ? (
                <>
                  <span className="ms-price">
                    <CurrencyFormat
                      value={product?.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={""}
                      className={"me-1"}
                    />
                    đ
                  </span>
                </>
              ) : (
                <>
                  <span className="ms-price">
                    <CurrencyFormat
                      value={
                        product?.price - (product?.price * product?.sale) / 100
                      }
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={""}
                      className={"me-1"}
                    />
                    đ
                  </span>
                  <span className="ms-main-price">
                    <CurrencyFormat
                      value={product?.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={""}
                      className={"me-1"}
                    />
                    đ
                  </span>
                </>
              )}
            </p>
            <p className="ms-product-des">{product?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
