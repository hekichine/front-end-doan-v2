import React from "react";
import { Link } from "react-router-dom";

import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import CurrencyFormat from "react-currency-format";
import { useState } from "react";
import { useEffect } from "react";

const Product = (props) => {
  const dispatch = useDispatch();
  let product = props.data;
  let cart = useSelector((state) => state?.cart);
  const [isCart, setIsCart] = useState(false);

  const handleAddCart = () => {
    let action = {
      ...product,
      count: 1,
    };
    dispatch(addCart(action));
    setIsCart(true);
    return;
  };
  useEffect(() => {
    let check = cart?.some((item) => item?.id === product?.id);
    if (check) {
      setIsCart(true);
    }
  }, []);

  return (
    <>
      <div className="ms-product-item">
        <div className="ms-product-inner ms-pr ms-oh">
          <div className="ms-product-img ms-pr ratio ratio-4x5">
            <Link to="#">
              <img src={product?.image_url} alt="" />
            </Link>
            <div className="ms-product-image-overlay ms-pe-none"></div>
            <div className="ms-product-btn-group ms-pe-none">
              <button className="ms-quickview ms-pe-auto ms-button-cart">
                Quick view
              </button>
              {isCart ? (
                <>
                  <Link
                    to={"/cart"}
                    className="ms-addcart ms-pe-auto ms-button-cart"
                  >
                    Go to cart
                  </Link>
                </>
              ) : (
                <>
                  <button
                    className="ms-addcart ms-pe-auto ms-button-cart"
                    onClick={() => handleAddCart()}
                  >
                    Add to cart
                  </button>
                </>
              )}
            </div>
            <span className="ms-title-size">xs,s,m,l,xl</span>
            <div className="ms-sale ms-po">
              <span>-20%</span>
            </div>
            <div className="ms-heart ms-po">
              <Link to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-heart"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="ms-product-info">
            <div className="ms-product-info-inner">
              <p className="ms-product-title">
                <Link to="#">Band-collar Popover Tunic</Link>
              </p>
              <div className="ms-product-price">
                <CurrencyFormat
                  value={300000}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  className={"ms-product-cost me-1"}
                />
                <CurrencyFormat
                  value={800000}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  className={"ms-product-sale"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
