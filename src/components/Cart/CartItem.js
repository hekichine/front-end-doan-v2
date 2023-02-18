import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CartItem = (props) => {
  let product = props.product;
  const [count, setCount] = useState(product?.count);

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
            onChange={(e) => setCount(e.target.value)}
          />
        </td>
        <td>
          <div className="price-wrap">
            <small
              className="text-muted me-1"
              style={{ textDecoration: "line-through" }}
            >
              {product?.price}đ
            </small>
            <span style={{ color: "red", fontWeight: "800" }}>
              {product?.sale}% OFF
            </span>
            <var className="price">
              {product?.price - (product?.price * product?.sale) / 100} đ
            </var>
          </div>
        </td>
        <td className="text-right">
          <button className="btn btn-light" title="Remove product">
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
