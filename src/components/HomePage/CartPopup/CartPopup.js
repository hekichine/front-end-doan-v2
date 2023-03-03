import React from "react";
import CurrencyFormat from "react-currency-format";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

import "./CartPopup.css";
import CartItem from "./CartItem";

const CartPopup = (props) => {
  let visible = props?.visible;
  let setVisible = props?.setVisible;
  let carts = useSelector((state) => state?.cart);

  const closeCart = () => {
    document.querySelector(".ms-overlay-mobile")?.classList.remove("active");
    setVisible(false);
  };
  return (
    <>
      <div className={visible ? "ms-cart-popup  is-active" : "ms-cart-popup"}>
        <div className="ms-cart-top d-flex align-items-center px-4 justify-content-between">
          <h2 className="m-0  text-uppercase text-start">Shopping cart</h2>
          <button onClick={() => closeCart()} className="btn-close-cart">
            <GrClose size={20} />
          </button>
        </div>
        <div className="ms-cart-content px-4 my-2">
          {carts &&
            carts?.length > 0 &&
            carts?.map((item, index) => <CartItem />)}
        </div>
        <div className="ms-cart-bottom p-4 ">
          <div className="ms-cart-total">
            <span className="ms-total-title">Total:</span>
            <CurrencyFormat
              value={1600}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              className={"ms-total-price"}
            />
          </div>
          <div className="ms-mini-cart-group-btns">
            <button
              className="ms-close-cart ms-mini-cart-btn"
              onClick={() => closeCart()}
            >
              Close cart
            </button>
            <Link to="" className="ms-checkout-btn ms-mini-cart-btn">
              Check out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPopup;
