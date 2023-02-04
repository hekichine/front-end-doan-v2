import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Slider from "./Slider";

const HomePage = () => {
  return (
    <>
      <Header />
      <section className="ms-app-content">
        <Outlet />
      </section>
    </>
  );
};

export default HomePage;
