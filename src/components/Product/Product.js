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
      <div className="ms-product-item">
        <div className="ms-product-inner ms-pr ms-oh">
          <div className="ms-product-img ms-pr ratio ratio-4x5">
            <Link to="#">
              <img src="./assets/image/product-show/pr2.png" alt="" />
            </Link>
            <div className="ms-product-image-overlay"></div>
            <div className="ms-product-btn-group">
              <Link to="#" className="ms-quickview">
                Quick view
              </Link>
              <Link to="#" className="ms-addcart">
                Quick shop
              </Link>
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
                <span className="ms-product-cost">$300.00</span>
                <span className="ms-product-sale">$800.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
