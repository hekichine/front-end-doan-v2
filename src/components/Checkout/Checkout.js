import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import "./checkout.css";

const Checkout = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="container my-5 checkout-section">
        <div className="row">
          <div className="checkout-item col-lg-6 col-12">
            <div className="checkout-item-inner">
              <div className="checkout-wrap text-start">
                <div className="checkout-heading mb-3">
                  <h3 className="mb-4">MINHSANGSTORE</h3>
                  <p className="d-flex align-items-center">
                    <Link to={""}>Home</Link>
                    <span className="mx-1">
                      <IoIosArrowForward />
                    </span>
                    <Link to={"/cart"}>Cart</Link>
                    <span className="mx-1">
                      <IoIosArrowForward />
                    </span>
                    <span>Checkout</span>
                  </p>
                </div>
                <div className="checkout-user-info">
                  <div className="ms-ship-address d-lg-flex flex-wrap justify-content-between">
                    <div className="mb-3 w-lg-50">
                      <label htmlFor="ship-fullname" className="mb-2">
                        Full name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="ship-fullname"
                      />
                    </div>
                    <div className="mb-3 w-lg-50">
                      <label htmlFor="ship-email" className="mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="form-control"
                        id="ship-email"
                      />
                    </div>
                    <div className="mb-3 w-100">
                      <label htmlFor="ship-address" className="mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="ship-address"
                      />
                    </div>
                    <div className="mb-3 w-100">
                      <label htmlFor="" className="mb-2">
                        Payment method
                      </label>
                      <div className="payment-item">
                        <div className="payment-title">Momo</div>
                        <div className="payment-content">
                          <p>Momo online QR</p>
                          <div
                            className="payment-img overflow-hidden"
                            style={{
                              width: "250px",
                              height: "300px",
                              margin: "0 auto",
                            }}
                          >
                            <img
                              src="http://localhost:8080/momopayment.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="checkout-product-item col-lg-6 col-12">
            <div className="checkout-product-inner"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
