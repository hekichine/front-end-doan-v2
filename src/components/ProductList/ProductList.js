import React from "react";
import Product from "./Product";

import data from "./dataProduct";

const ProductList = () => {
  return (
    <>
      <div className="ms-product-list" style={{ margin: "0 0 40px 0" }}>
        <div className="container">
          <h3 className="ms-section-heading">Best Seller</h3>
          <h4 className="ms-section-subheading">
            Mirum est notare quam littera gothica, quam nunc putamus parum
            claram anteposuerit litterarum formas.
          </h4>
          <div className="row gx-4 gy-3">
            {data &&
              data.length > 0 &&
              data
                .slice(0, 8)
                .map((item, index) => (
                  <Product data={item} key={index} incart={false} />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
