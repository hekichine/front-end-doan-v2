import React from "react";
import { Link } from "react-router-dom";

import "./Cart.css";
import CartItem from "./CartItem";
import data from "../ProductList/dataProduct.js";

const Cart = () => {
  return (
    <>
      <div className="ms-cart">
        <section className="section-content">
          <div className="ms-section-heading text-center py-5">
            <h3>Shopping Cart</h3>
          </div>
          <div className="container">
            <div className="row">
              <main className="col-lg-9 col-12">
                <div className="card">
                  <table className="table table-borderless table-shopping-cart">
                    <thead className="text-muted">
                      <tr className="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col" width="120">
                          Quantity
                        </th>
                        <th scope="col" width="120">
                          Price
                        </th>
                        <th scope="col" className="text-right" width="200">
                          {" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.slice(0, 4).map((item, index) => (
                        <CartItem data={item} />
                      ))}
                    </tbody>
                  </table>

                  <div className="card-body border-top">
                    <Link to="/shop" className="btn btn-light">
                      {" "}
                      <i className="fa fa-chevron-left"></i> Continue shopping{" "}
                    </Link>
                  </div>
                </div>

                <div className="alert alert-success mt-3">
                  <p className="icontext">
                    <i className="icon text-success fa fa-truck"></i> Free
                    Delivery within 1-2 weeks
                  </p>
                </div>
              </main>
              <aside className="col-lg-3 col-12">
                <div className="card mb-3">
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label>Have coupon?</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            name=""
                            placeholder="Coupon code"
                          />
                          <span className="input-group-append">
                            <button className="btn btn-primary">Apply</button>
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <dl className="dlist-align">
                      <dt>Total price:</dt>
                      <dd className="text-right">USD 568</dd>
                    </dl>
                    <dl className="dlist-align">
                      <dt>Discount:</dt>
                      <dd className="text-right">USD 658</dd>
                    </dl>
                    <dl className="dlist-align">
                      <dt>Total:</dt>
                      <dd className="text-right  h5">
                        <strong>$1,650</strong>
                      </dd>
                    </dl>
                    <hr />
                    <p className="text-center mb-3">
                      <img
                        src="./assets/images/misc/payments.png"
                        height="26"
                      />
                    </p>
                    <Link to="#" className="btn btn-primary float-md-right">
                      {" "}
                      Check out
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <section className="section-name bg padding-y">
          <div className="container">
            <h6>Payment and refund policy</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
