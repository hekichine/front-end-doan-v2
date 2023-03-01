import React from "react";
import Product from "../Product/Product";

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const SaleProduct = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    let fetch = async () => {
      let result = await axios.get(`http://localhost:8080/api/product/sale`);
      if (result?.data?.error === 0) {
        setProducts(result?.data?.sale);
      }
    };
    fetch();
  }, []);
  return (
    <>
      <div className="ms-trending" style={{ marginBottom: "40px" }}>
        <div className="container">
          <div className="ms-section-heading" style={{ marginBottom: "30px" }}>
            SALE
          </div>
          <div className="row gx-4 gy-3">
            {products &&
              products?.length > 0 &&
              products
                ?.slice(0, 8)
                ?.sort((a, b) => b.sale - a.sale)
                ?.map((item, index) => (
                  <>
                    <div className="col-6 col-md-4 col-lg-3">
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
