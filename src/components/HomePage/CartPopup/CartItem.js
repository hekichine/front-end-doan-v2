import React from "react";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { GrFormClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./CartItem.css";

const CartItem = (props) => {
  const product = props?.product;
  const [count, setCount] = useState(product?.count);
  const dispatch = useDispatch();

  const CountChange = (e) => {
    if (e.target.value >= product?.quantity) {
      setCount(product?.quantity);
      return;
    }
    setCount(e.target.value);
  };
  const inCre = () => {
    if (count >= product?.quantity) {
      setCount(product?.quantity);
      return;
    }
    setCount((pre) => pre + 1);
  };
  const deCre = () => {
    if (count == 1) {
      return;
    }
    setCount((pre) => pre - 1);
  };

  return (
    <>
      <div className="ms-cart-item my-4">
        <div className="ms-cart-item-img">
          <Link to={""}>
            <img src="./assets/dataProduct/pr1/1.webp" alt="" />
          </Link>
        </div>
        <div className="ms-cart-info ms-pr text-start">
          <Link to={""} className="ms-cart-pr-name">
            produce name produce name produce name produce name produce name
          </Link>
          <div className="ms-cart-metas">
            <CurrencyFormat
              value={800}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              className={"ms-cart-price"}
            />
            <CurrencyFormat
              value={500}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              className={"ms-cart-sale"}
            />
          </div>
          <div className="ms-cart-action">
            <div className="ms-quantity-wrap">
              <button onClick={() => deCre()}>-</button>
              <input
                type="text"
                value={count}
                onChange={(e) => CountChange()}
              />
              <button onClick={() => inCre()}>+</button>
            </div>
          </div>
          <button className="btn-del-cart-item">
            <GrFormClose />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
