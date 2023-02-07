import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";
import loginImage from "./1.webp";
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="ms-login">
        <div className="maincontainer">
          <div className="container-fluid">
            <div className="row no-gutter">
              <div
                className="col-md-6 d-none d-md-flex bg-image"
                style={{ backgroundImage: `url(${loginImage})` }}
              ></div>
              <div className="col-md-6 bg-light">
                <div className="login d-flex align-items-center py-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-10 col-xl-7 mx-auto">
                        <h3 className="display-4">MINH SANG STORE</h3>
                        <p className="text-muted mb-4">
                          Create a account or login to use to website.
                        </p>
                        <form onSubmit={(e) => handleSubmit(e)}>
                          <div className="mb-3">
                            <input
                              id="inputUserName"
                              type="text"
                              placeholder="User name"
                              required=""
                              autofocus=""
                              className="form-control rounded-pill border-0 shadow-sm px-4"
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              id="inputEmail"
                              type="email"
                              placeholder="Email address"
                              required=""
                              autofocus=""
                              className="form-control rounded-pill border-0 shadow-sm px-4"
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              id="inputFullName"
                              type="text"
                              placeholder="Full name"
                              required=""
                              className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              id="inputPassword"
                              type="password"
                              placeholder="Password"
                              required=""
                              className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                            />
                          </div>

                          <div className="d-grid gap-2 mt-2">
                            <button
                              type="submit"
                              className="btn btn-primary btn-block text-uppercase mb-2  rounded-pill shadow-sm"
                            >
                              Sign up
                            </button>

                            <Link
                              to="/signin"
                              type="submit"
                              className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                            >
                              Back to Sign in
                            </Link>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
