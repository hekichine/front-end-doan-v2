import React from "react";
import { FiUsers, FiAlignJustify, FiImage } from "react-icons/fi";
import "./countUser.css";
const CountUser = () => {
  return (
    <>
      <div className="total-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="total-inner d-flex justify-content-center align-items-center ">
          <div className="total-user pe-3">
            <FiUsers />
          </div>
          <div className="total-user-count">
            <p>520</p>
            <p>user</p>
          </div>
        </div>
      </div>
      <div className="total-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="total-inner d-flex justify-content-center align-items-center ">
          <div className="total-user pe-3">
            <FiAlignJustify />
          </div>
          <div className="total-user-count">
            <p>32</p>
            <p>order</p>
          </div>
        </div>
      </div>
      <div className="total-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="total-inner d-flex justify-content-center align-items-center ">
          <div className="total-user pe-3">
            <FiImage />
          </div>
          <div className="total-user-count">
            <p>12321</p>
            <p>products</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountUser;
