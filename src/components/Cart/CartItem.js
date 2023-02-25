import React from "react";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeCart } from "../../redux/cartSlice";

const CartItem = (props) => {
  let product = props.product;
  let setLoad = props?.setLoad;
  const [count, setCount] = useState(product?.count);
  const dispath = useDispatch();
  const handleRemoveCart = (product) => {
    dispath(removeCart(product));
  };
  const handleSetCount = (e) => {
    if (e.target.value >= product?.quantity) {
      setCount(product?.quantity);
      setLoad((pre) => pre + 1);
    } else if (e.target.value <= 0) {
      setCount(1);
    } else {
      setCount(e.target.value);
      setLoad((pre) => pre + 1);
    }
  };
  return (
    <>
      <tr key={product.id}>
        <td>
          <figure className="itemside">
            <div className="aside">
              <img
                src={`http://localhost:8080/${product?.product_image}`}
                alt=""
                className="img-sm"
              />
            </div>
            <figcaption className="info">
              <Link to={`/product/${product.id}`} className="title text-dark">
                {product?.product_name}
              </Link>
              <p className="text-muted small">Language: {product?.language}</p>
            </figcaption>
          </figure>
        </td>
        <td>
          <input
            type="number"
            className="form-control"
            value={count}
            onChange={(e) => handleSetCount(e)}
          />
        </td>
        <td>
          <div className="price-wrap">
            <small
              className="text-muted me-1"
              style={{ textDecoration: "line-through" }}
            >
              <CurrencyFormat
                value={product?.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={""}
                className={"me-1"}
              />
              đ
            </small>
            <span style={{ color: "red", fontWeight: "800", fontSize: "13px" }}>
              {product?.sale}% OFF
            </span>
            <var className="price">
              <CurrencyFormat
                value={product?.price - (product?.price * product?.sale) / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={""}
                className={"me-1"}
              />
              đ
            </var>
          </div>
        </td>
        <td className="text-right">
          <button
            className="btn btn-light"
            title="Remove product"
            onClick={() => handleRemoveCart(product)}
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
