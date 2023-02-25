import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

// import data from "./dataProduct";

const Trending = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getAll = async () => {
      let result = await axios.get(
        `http://localhost:8080/api/product/getall?page=${1}&limit=12`
      );
      console.log(result);
      if (result.data.error === 0) {
        setData(result.data.rows);
      }
    };
    getAll();
  }, []);
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
