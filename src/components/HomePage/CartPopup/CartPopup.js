import React from "react";
import CurrencyFormat from "react-currency-format";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TbMoodEmpty } from "react-icons/tb";

import "./CartPopup.css";
import CartItem from "./CartItem";

const CartPopup = (props) => {
  let visible = props?.visible;
  let setVisible = props?.setVisible;
  let carts = useSelector((state) => state?.cart);

  const totalPrice = () => {
    let total = 0;
    let price = carts?.map(
      (item) =>
        (total +=
          (item?.price - (item?.price * item?.sale) / 100) * item?.count)
    );
    return total;
  };

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
        {carts?.length == 0 ? (
          <>
            <div className="ms-cart-null">
              <div className="d-flex justify-content-center align-items-center flex-column h-100">
                <h2>Cart empty</h2>
                <TbMoodEmpty size={40} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="ms-cart-content px-4 my-2">
              {carts &&
                carts?.length > 0 &&
                carts?.map((item, index) => <CartItem product={item} />)}
            </div>
            <div className="ms-cart-bottom p-4 ">
              <div className="ms-cart-total">
                <span className="ms-total-title">Total:</span>
                <CurrencyFormat
                  value={totalPrice()}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={2}
                  prefix={"$"}
                  className={"ms-total-price"}
                />
              </div>
              <div className="text-start py-3">
                <p className="label-tax">
                  Taxes and shipping calculated at checkout
                </p>
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
          </>
        )}
      </div>
    </>
  );
};

export default CartPopup;
