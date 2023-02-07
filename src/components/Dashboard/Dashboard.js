import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./Dashboard.css";
import Social from "../Header/Social";

const Dashboard = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleNav = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <>
      <section
        className={
          toggleNav
            ? "ms-dashboard sb-nav-fixed sb-sidenav-toggled"
            : "ms-dashboard sb-nav-fixed"
        }
      >
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          {/* <!-- Navbar Brand--> */}
          <Link className="navbar-brand ps-3" to="">
            Minh Sang Store
          </Link>
          {/* <!-- Sidebar Toggle--> */}
          <button
            onClick={handleNav}
            className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
            id="sidebarToggle"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- Navbar--> */}
        </nav>
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav
              className="sb-sidenav accordion sb-sidenav-dark"
              id="sidenavAccordion"
            >
              <div className="sb-sidenav-menu">
                <div className="nav">
                  <div className="sb-sidenav-menu-heading">
                    <div className="ms-menu-avt">
                      <img src="./assets/images/items/2.webp" alt="" />
                    </div>
                    <div className="ms-user-info">
                      <p>Luu xuan chien</p>
                      <span>admin</span>
                    </div>
                  </div>
                  <Link className="nav-link" to="/dashboard">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-tachometer-alt"></i>
                    </div>
                    Dashboard
                  </Link>
                  <div className="sb-sidenav-menu-heading">Manager</div>
                  <Link
                    className="nav-link collapsed"
                    to=""
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseLayouts"
                    aria-expanded="false"
                    aria-controls="collapseLayouts"
                  >
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-columns"></i>
                    </div>
                    Products
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </Link>
                  <div
                    className="collapse"
                    id="collapseLayouts"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordion"
                  >
                    <nav className="sb-sidenav-menu-nested nav">
                      <Link className="nav-link" to="/dashboard/products">
                        Products
                      </Link>
                      <Link className="nav-link" to="/dashboard/categories">
                        Categories
                      </Link>
                    </nav>
                  </div>
                  <Link
                    className="nav-link collapsed"
                    to=""
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsePages"
                    aria-expanded="false"
                    aria-controls="collapsePages"
                  >
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-book-open"></i>
                    </div>
                    User
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </Link>
                  <div
                    className="collapse"
                    id="collapsePages"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#sidenavAccordion"
                  >
                    <nav
                      className="sb-sidenav-menu-nested nav accordion"
                      id="sidenavAccordionPages"
                    >
                      <Link
                        className="nav-link collapsed"
                        to="/dashboard/account"
                      >
                        Account
                      </Link>

                      {/* <Link
                        className="nav-link collapsed"
                        to="/dashboard/logout"
                      >
                        Logout
                      </Link> */}
                    </nav>
                  </div>
                </div>
              </div>
              <div className="ms-social ">
                <Social color={"#fff"} />
              </div>
              <div className="sb-sidenav-footer">
                <div className="small">Power by: HekiChien</div>
              </div>
            </nav>
          </div>
          <div id="layoutSidenav_content">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
