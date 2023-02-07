import React from "react";
import Product from "./Product";

import data from "./dataProduct";

const Trending = () => {
  return (
    <>
      <div className="ms-trending" style={{ marginBottom: "40px" }}>
        <div className="container">
          <div className="ms-section-heading" style={{ marginBottom: "30px" }}>
            Trending
          </div>
          <div className="row gx-4 gy-3">
            {data &&
              data.length > 0 &&
              data.slice(0, 8).map((item, index) => <Product data={item} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
