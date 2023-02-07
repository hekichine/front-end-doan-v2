import React from "react";
import { Link } from "react-router-dom";

const CartItem = (props) => {
  let data = props.data;
  return (
    <>
      <tr>
        <td>
          <figure className="itemside">
            <div className="aside">
              <img src={data.image_url} alt="" className="img-sm" />
            </div>
            <figcaption className="info">
              <Link to="#" className="title text-dark">
                {data.name}
              </Link>
              <p className="text-muted small">Category: {data.category}</p>
            </figcaption>
          </figure>
        </td>
        <td>
          <input type="number" className="form-control" value={1} />
        </td>
        <td>
          <div className="price-wrap">
            <small
              className="text-muted"
              style={{ textDecoration: "line-through" }}
            >
              {data.price - (data.price * data.sale) / 100}$
            </small>
            <var className="price">{data.price}$</var>
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
