import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import "./Cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useState } from "react";

const Cart = () => {
  let cart = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.map(
      (item) =>
        (total += item.count * (item.price - (item.price * item.sale) / 100))
    );
    setTotalPrice(total);
  }, []);
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
                      <tr
                        className="small text-uppercase "
                        style={{ borderBottom: "1px solid #dee2e6" }}
                      >
                        <th scope="col">Product</th>
                        <th scope="col" width="150">
                          Quantity
                        </th>
                        <th scope="col" width="150">
                          Price
                        </th>
                        <th scope="col" className="text-right" width="200"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart && cart?.length > 0 ? (
                        cart?.map((item, index) => <CartItem product={item} />)
                      ) : (
                        <>
                          <tr>
                            <td colSpan="4">
                              <div className="ms-cart-empty d-flex align-items-center justify-content-center my-5 color-red">
                                <span style={{ color: "red" }}>Cart Empty</span>
                              </div>
                            </td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>

                  <div className="card-body border-top">
                    <Link to="/shop" className="btn btn-light">
                      <i className="fa fa-chevron-left"></i> Continue shopping
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
                <div className="card">
                  <div className="card-body">
                    <dl className="dlist-align">
                      <dt>Total price:</dt>
                      <dd className="text-right">
                        <CurrencyFormat
                          value={totalPrice}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                          className={"me-2"}
                        />
                        VND
                      </dd>
                    </dl>
                    <dl className="dlist-align">
                      <dt>Total:</dt>
                      <dd className="text-right  h5">
                        <strong>
                          <CurrencyFormat
                            value={totalPrice}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={""}
                            className={"me-2"}
                          />
                          VND
                        </strong>
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
