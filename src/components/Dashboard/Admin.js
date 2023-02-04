import React from "react";
import Chart from "./Chart";
import CountUser from "./CountUser";
import "./Dashboard.css";
import UserTable from "./UserTable";

let dataUser = [
  {
    id: 1,
    name: "Thomas Hardy",
    user_name: "thomas_hardy",
    address: "89 Chiaroscuro Rd.",
    phone_number: "01212121",
    email: "a@abc.com",
  },
  {
    id: 2,
    name: "Maria Anders",
    user_name: "maria_anders",
    address: "Obere Str. 57",
    phone_number: "01212121123",
    email: "b@abc.com",
  },
  {
    id: 3,
    name: "Fran Wilson",
    user_name: "fran_wilson",
    address: "C/ Araquil, 67",
    phone_number: "312312312",
    email: "ac@abc.com",
  },
  {
    id: 4,
    name: "Dominique Perrier",
    user_name: "dominique",
    address: "25, rue Lauriston",
    phone_number: "4543534",
    email: "aas@abc.com",
  },
  {
    id: 5,
    name: "Martin Blank",
    user_name: "martin_blank",
    address: "Via Monte Bianco 34",
    phone_number: "213213",
    email: "aaasdass@abc.com",
  },
];
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
          <div className="card mb-4">
            <div className="card-header text-start d-flex justify-content-between">
              <div className="ms-table-title">
                <i className="fas fa-table me-1"></i>
                User Manager
              </div>
              <div className="ms-table-search">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search user"
                />
              </div>
            </div>
            <div className="card-body">
              <UserTable dataUser={dataUser} />
            </div>
          </div>
        </div>
      </main>
      <footer className="py-4 bg-light mt-auto">
        <div className="container-fluid px-4">
          <div className="d-flex align-items-center justify-content-between small">
            <div className="text-muted">Copyright &copy; Your Website 2022</div>
            <div>
              <a href="#">Privacy Policy</a>
              &middot;
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Admin;
