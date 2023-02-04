import React from "react";
import { Link } from "react-router-dom";
import "./Social.css";
const Social = (props) => {
  const color = props?.color;
  return (
    <>
      <div className="social-media order-lg-last" data-color={color}>
        <p className="mb-0 d-flex justify-content-center">
          <Link
            to="https://www.facebook.com/luv.you.baka?mibextid=ZbWKwL"
            target={"_blank"}
            className="d-flex align-items-center justify-content-center"
          >
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link
            to=""
            className="d-flex align-items-center justify-content-center"
          >
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link
            to="https://instagram.com/luv.you.baka?igshid=YzgyMTM2MGM="
            target={"_blank"}
            className="d-flex align-items-center justify-content-center"
          >
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Social;
