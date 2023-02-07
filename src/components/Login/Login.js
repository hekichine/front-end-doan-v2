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
                              id="inputPassword"
                              type="password"
                              placeholder="Password"
                              required=""
                              className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                            />
                          </div>
                          <div className="form-check text-end">
                            Dont's have a account?
                            <Link
                              to="/signup"
                              type="submit"
                              className=" text-uppercase ms-2 mb-2 me-2 rounded-pill shadow-sm  d-inline-block"
                            >
                              Register
                            </Link>
                          </div>
                          <div className="d-grid gap-2 mt-2">
                            <button
                              type="submit"
                              className="btn btn-primary btn-block text-uppercase mb-2  rounded-pill shadow-sm"
                            >
                              Sign in
                            </button>

                            <Link
                              to="/"
                              type="submit"
                              className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                            >
                              Back to home page
                            </Link>
                          </div>

                          {/* <div className="text-center d-flex justify-content-between mt-4">
                          <p>
                            Code by{" "}
                            <a href="#" className="font-italic text-muted">
                              <u>Chien luu xuan</u>
                            </a>
                          </p>
                        </div> */}
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
