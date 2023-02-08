import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import "./Header.css";
const Header = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <section className="ms-header ftco-section">
        <div className="container">
          <nav
            className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light"
            id="ftco-navbar"
          >
            <div className="container">
              <Link className="navbar-brand" to="">
                MinhSangStore
              </Link>
              <div className="ms-cart-control ">
                <Link to="/cart">
                  <FiShoppingCart size={"20px"} />
                  <span>10</span>
                </Link>
              </div>
              <button
                className="navbar-toggler collapsed "
                type="button"
                data-toggle="collapse"
                data-target="#ftco-nav"
                aria-controls="ftco-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="fa fa-bars"></span> Menu
              </button>
              <div className="navbar-collapse collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto mr-md-3 align-items-center">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" className="nav-link">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/work" className="nav-link">
                      Work
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link">/</span>
                  </li>
                  {user ? (
                    <>
                      <li>
                        <span className="mx-3">Hi! {user.fullname}</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <NavLink to="/signin" className="nav-link">
                          Sign in
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/signup" className="nav-link">
                          Sign up
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Header;
