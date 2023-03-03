import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CartPopup from "./CartPopup/CartPopup";

const HomePage = () => {
  return (
    <>
      <div class="ms-overlay-mobile"></div>
      <Header />
      <section className="ms-app-content">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
