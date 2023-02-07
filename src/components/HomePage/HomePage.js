import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <section className="ms-app-content">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
