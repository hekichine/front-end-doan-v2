import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import UserTable from "./UserTable";
import axios from "axios";
import ReactPaginate from "react-paginate";

import "./accountuser.css";

const AccountManager = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(15);

  const handlePageClick = (dt) => {
    let numpage = dt.selected + 1;
    setCurrentPage(numpage);
  };
  const handleView = () => {
    let random = Math.floor(Math.random() * 1000);
    setLimit(random);
  };

  useEffect(() => {
    setLoading(true);
    let callDataUser = async (currentPage, limit) => {
      let data = await axios.get(
        `http://localhost:8080/api/user/getall?page=${currentPage}&limit=${limit}`
      );
      console.log(data.data);
      if (data && data.data.error !== "0") {
        setUser(data.data.rows);
        setPage(data.data.pageCount);
        console.log(data.data.rows);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    callDataUser(currentPage, limit);
    return () => {
      clearTimeout();
    };
  }, [currentPage, limit]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
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
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="card-body">
              {loading ? (
                <BeatLoader color="#36d7b7" />
              ) : (
                <UserTable
                  setReUser={setUser}
                  dataUser={user}
                  search={search}
                />
              )}
              <nav className="mx-3 my-2 d-flex justify-content-between">
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  pageCount={page}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={1}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                />
                <div className="ms-view-all">
                  <button onClick={() => handleView()}> View all</button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountManager;
