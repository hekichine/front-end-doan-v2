import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import {
  AiOutlineReconciliation,
  AiOutlineRedEnvelope,
  AiOutlineProfile,
} from "react-icons/ai";
import { GoPencil } from "react-icons/go";

import "./countUser.css";
const CountUser = () => {
  const [dataCount, setDataCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [collection, setCollection] = useState(0);
  const [comments, setComment] = useState(0);
  useEffect(() => {
    let fetchUser = async () => {
      let result = await axios.get(
        "http://localhost:8080/api/user/getall?page=1&limit=3"
      );

      if (result.data.error === 0) {
        setDataCount(result.data?.dataCount);
      }
    };

    let fetchProduct = async () => {
      let result = await axios.get(
        "http://localhost:8080/api/product/getall?page=1&limit=3"
      );

      if (result.data.error === 0) {
        setProductCount(result.data?.dataCount);
      }
    };
    let fetchComment = async () => {
      let result = await axios.get(
        `http://localhost:8080/api/product/comment?page=1&limit=3`
      );
      console.log(result.data);
      if (result.data.error === 0) {
        setComment(result.data?.dataCount);
      }
    };
    fetchProduct();
    fetchUser();
    fetchComment();
  }, []);
  return (
    <>
      <div className="total-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="total-inner d-flex justify-content-center align-items-center ">
          <div className="total-user pe-3">
            <FiUsers />
          </div>
          <div className="total-user-count">
            <p>{dataCount}</p>
            <p>User</p>
          </div>
        </div>
      </div>
      <div className="total-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="total-inner d-flex justify-content-center align-items-center ">
          <div className="total-user pe-3">
            <AiOutlineReconciliation />
          </div>
          <div className="total-user-count">
            <p>{orderCount}</p>
            <p>Order</p>
          </div>
        </div>
      </div>
      <div className="total-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="total-inner d-flex justify-content-center align-items-center ">
          <div className="total-user pe-3">
            <AiOutlineRedEnvelope />
          </div>
          <div className="total-user-count">
            <p>{productCount}</p>
            <p>Products</p>
          </div>
        </div>
      </div>
      <div className="total-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="total-inner d-flex justify-content-center align-items-center ">
          <div className="total-user pe-3">
            <AiOutlineProfile />
          </div>
          <div className="total-user-count">
            <p>{collection}</p>
            <p>Collections</p>
          </div>
        </div>
      </div>
      <div className="total-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="total-inner d-flex justify-content-center align-items-center ">
          <div className="total-user pe-3">
            <GoPencil />
          </div>
          <div className="total-user-count">
            <p>{comments}</p>
            <p>Comments</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountUser;
