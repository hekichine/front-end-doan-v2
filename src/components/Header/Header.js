import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { RiMenu4Fill } from "react-icons/ri";
import { MdOutlineMenuOpen } from "react-icons/md";

import { BsTelephone, BsSearch } from "react-icons/bs";

import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  let user = JSON.parse(localStorage.getItem("user"));
  const [toggleNav, setToggleNav] = useState();

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".sticky-thc");
    const scrollTop = window.scrollY;
    scrollTop >= 43
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  const showMenu = () => {
    setToggleNav(true);
  };
  return (
    <>
      <section className="ms-header">
        <div className="ms-header-top">
          <div className="ms-header-top-container container">
            <div className="ms-header-top-row row">
              <div className="ms-item-left col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="ms-item-left-content">
                  <div className="ms-item-tel">
                    <BsTelephone />
                    <Link to="#">+1-202-555-0184</Link>
                  </div>
                  <div className="ms-item-mail">
                    <MdOutlineMail />
                    <Link to="#">sayhello@punio.com</Link>
                  </div>
                </div>
              </div>
              <div className="ms-item-right col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="ms-item-right-content">
                  <div className="ms-item-contact">
                    <Link to="#">Contact</Link>
                  </div>
                  <div className="ms-item-faq">
                    <Link to="#">FAQs</Link>
                  </div>
                  <div className="ms-item-lenguage">
                    <div className="ms-lenguage-item ms-lenguage-item-hover">
                      <span>EN</span>
                      <i className="fa-solid fa-angle-down"></i>
                      <div className="ms-item-lenguage-select">
                        <ul>
                          <li>
                            <span>EN</span>
                          </li>
                          <li>
                            <span>VN</span>
                          </li>
                          <li>
                            <span>CN</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ms-money-item ms-lenguage-item-hover">
                      <span>USD</span>
                      <i className="fa-solid fa-angle-down"></i>
                      <div className="ms-item-lenguage-select">
                        <ul>
                          <li>
                            <span>USD</span>
                          </li>
                          <li>
                            <span>VND</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ms-header-bottom ms-pr sticky-thc">
          <div className="ms-header-bottom-container container">
            <div className="ms-header-bottom-row row">
              <div className="col-md-4 d-xl-none col-3">
                <div className="ms-menu-mobie" onClick={() => showMenu()}>
                  <RiMenu4Fill />
                </div>
              </div>
              <div className="col-md-4 col-xl-2 col-6 text-xl-start text-center">
                <div className="ms-header-logo">
                  <Link to="#">
                    <img src="./assets/logoApp/shine.png" alt="" />
                  </Link>
                </div>
              </div>
              <div
                className={
                  toggleNav
                    ? "col col-item ms-menu-mobile active"
                    : "col col-item ms-menu-mobile"
                }
              >
                <div className="ms-navigation">
                  <div className="ms-mobile-show">
                    <div className="ms-logo-mobile">
                      <img src="./assets/image/logoApp/USEN.png" alt="" />
                    </div>
                    <div className="ms-close-btn-mobile ms-menu-mobie">
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <Link to="#" className="ms-name-nav ms-pr">
                        <span>demo</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="ms-name-nav ms-pr">
                        <span>features</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="ms-name-nav ms-pr">
                        <span>shop</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="ms-name-nav ms-pr">
                        <span>products</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="ms-name-nav ms-pr">
                        <span>blog</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="ms-name-nav ms-pr">
                        <span>lookbook</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="ms-name-nav ms-pr">
                        <span>page</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-3 col-item col-xl-2">
                <div className="d-block d-lg-none ms-shopping-mobile">
                  <MdOutlineMenuOpen />
                </div>
                <div className="ms-mobile-slide-icon">
                  <div className="ms-site-nav-icons">
                    <div className="ms-nav_icon ms-icon_search">
                      <Link to="#" className="ms-pr">
                        <BsSearch size={20} />
                      </Link>
                    </div>
                    <div className="ms-nav_icon ms-icon_account">
                      <Link to="/signin" className="ms-pr">
                        <BiUser size={25} />
                      </Link>
                    </div>
                    <div className="ms-nav_icon ms-icon_heart">
                      <Link to="#" className="ms-pr">
                        <AiOutlineHeart size={25} />
                        <span className="ms-po ms-count-box">0</span>
                      </Link>
                    </div>
                    <div className="ms-nav_icon ms-icon_cart">
                      <Link to="#" className="ms-pr">
                        <FiShoppingBag size={23} />
                        <span className="ms-po ms-count-box">
                          {cart?.length || 0}
                        </span>
                      </Link>
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

export default Header;
