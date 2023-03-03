import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../../Product/Product";

import product from "../dataProduct";

const BestSeller = () => {
  // const [product, setProduct] = useState();
  useEffect(() => {
    let fetchData = async () => {
      let result = await axios.get(
        "http://localhost:8080/api/product/getall?page=0&limit=20"
      );
      // console.log(result);
      if (result?.data?.error === 0) {
        // setProduct(result?.data?.rows);
      }
    };
    // fetchData();
  }, []);
  return (
    <>
      <div className="ms-product-list" style={{ margin: "0 0 40px 0" }}>
        <div className="container">
          <h3 className="ms-section-heading">Best Seller</h3>
          <h4 className="ms-section-subheading">
            It is surprising to note how Gothic literature, which we consider
            less obvious today, predates alphabetic forms.
          </h4>
          <div className="row gx-4 gy-4 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {product?.length > 0 ? "" : <div className="m-auto">None sell</div>}
            {product &&
              product?.length > 0 &&
              product
                ?.slice(0, 10)
                ?.sort((a, b) => b.sell - a.sell)
                ?.map((item, index) => (
                  <>
                    <div className="col-item">
                      <Product data={item} key={index} />
                    </div>
                  </>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
