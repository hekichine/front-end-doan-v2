import React from "react";

import Chart from "./Chart";
import CountUser from "./CountUser";
import "./Dashboard.css";

import { Link } from "react-router-dom";

const dataChart = [
  {
    id: 1,
    month: "January",
    total: 20,
  },
  {
    id: 2,
    month: "February",
    total: 41,
  },
  {
    id: 3,
    month: "Match",
    total: 2,
  },
  {
    id: 4,
    month: "April",
    total: 10,
  },
  {
    id: 5,
    month: "May",
    total: 68,
  },
  {
    id: 5,
    month: "May",
    total: 68,
  },
  {
    id: 5,
    month: "May",
    total: 68,
  },
  {
    id: 5,
    month: "May",
    total: 68,
  },
  {
    id: 5,
    month: "May",
    total: 68,
  },
  {
    id: 5,
    month: "May",
    total: 68,
  },
];
const Admin = () => {
  return (
    <>
      <main>
        <div className="container-fluid px-4">
          <h1 className="mt-4">Dashboard</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
          <div className="row ms-status-bar my-5">
            <CountUser />
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 my-3 text-start">
              <h3 className="my-3">User Chart</h3>
              <Chart dataChart={dataChart} />
            </div>
            <div className="col-12 col-lg-6 my-3 text-start">
              <h3 className="my-3">Products Chart</h3>
              <Chart dataChart={dataChart} />
            </div>
          </div>
        </div>
      </main>
      <footer className="py-4 bg-light mt-auto">
        <div className="container-fluid px-4">
          <div className="d-flex align-items-center justify-content-between small">
            <div className="text-muted">
              Copyright &copy; MINHSANGSTORE 2022 by
              <Link className="ms-1" to="">
                HekiChien
              </Link>
            </div>
            <div>
              <Link to="">Privacy Policy</Link>
              &middot;
              <Link to="">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Admin;
