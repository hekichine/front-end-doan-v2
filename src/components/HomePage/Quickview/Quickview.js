import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiCloseLine } from "react-icons/ri";

import "./quickview.css";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { removeQuickview } from "../../../redux/quickviewSlice";

const Quickview = () => {
  const quickview = useSelector((state) => state.quickview);
  const dispatch = useDispatch();

  const exitQv = () => {
    dispatch(removeQuickview());
  };
  return (
    <>
      <div
        className={
          quickview && quickview?.length > 0
            ? "ms-quickview-popup active"
            : "ms-quickview-popup"
        }
      >
        <div className="ms-qickview-container container">
          <div className="row">
            <div className="col-12">
              <div className="heading-inner d-flex align-items-center m-3">
                <h3 className="qv-heading">Quickview</h3>
                <button className="btn-qv-exit" onClick={() => exitQv()}>
                  <RiCloseLine size={30} />
                </button>
              </div>
            </div>
            <div className="col-4">
              <div className="col-inner">
                <div className="qv-img ratio ratio-4x5">
                  <img src="./assets/dataProduct/pr1/1.webp" alt="" />
                </div>
              </div>
            </div>
            <div className="col-8 text-start">
              <div className="col-inner p-3">
                <Link to={"/"} className="product-name mb-3">
                  {quickview?.product_name ||
                    "abcasdasdsadsa sad sad sad asd sad sadas dasfasdf s asd asdas dsa aasdfaksdfs dsakjhf akjsd "}
                </Link>
                <p>
                  <CurrencyFormat
                    value={300}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalScale={2}
                    className={"ms-product-cost me-1"}
                  />
                  <CurrencyFormat
                    value={800}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalScale={2}
                    className={"ms-product-sale"}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quickview;
