import React from "react";
import { Link } from "react-router-dom";

const ShopPageItem = (props) => {
  let data = props.data;
  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((item, index) => (
          <div className="col-lg-4 col-md-6 col-sm-6 card-item" key={item.id}>
            <figure className="card card-product-grid">
              <div className="img-wrap">
                <img src={item.img_url} />
              </div>
              <figcaption className="info-wrap border-top">
                <div className="price-wrap">
                  <strong className="price">${item?.old}</strong>
                  <del className="price-old">${item.price}</del>
                </div>
                <Link to={""} className="title mb-2">
                  {item.title}
                </Link>
                <button className="btn btn-primary">Add to cart</button>
                <Link to={""} className="btn btn-light btn-icon">
                  {" "}
                  <i className="fa fa-heart"></i>{" "}
                </Link>
              </figcaption>
            </figure>
          </div>
        ))}
    </>
  );
};

export default ShopPageItem;
