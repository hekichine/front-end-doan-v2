import React from "react";
import Product from "../../Product/Product";

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import product from "../dataProduct";

const SaleProduct = () => {
  // const [products, setProducts] = useState();
  useEffect(() => {
    let fetch = async () => {
      let result = await axios.get(`http://localhost:8080/api/product/sale`);
      if (result?.data?.error === 0) {
        // setProducts(result?.data?.sale);
      }
    };
    // fetch();
  }, []);
  return (
    <>
      <div className="ms-trending" style={{ marginBottom: "40px" }}>
        <div className="container">
          <div className="ms-section-heading" style={{ marginBottom: "30px" }}>
            SALE
          </div>
          <div className="row gx-4 gy-4 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {product &&
              product?.length > 0 &&
              product
                ?.slice(0, 10)
                ?.sort((a, b) => b.sale - a.sale)
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

export default SaleProduct;
