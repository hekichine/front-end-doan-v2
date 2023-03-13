import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import axios from "axios";
import RingLoader from "react-spinners/RingLoader";

import "./ShopPage.css";
import ReactPaginate from "react-paginate";

import data from "../ProductList/dataProduct";
import { AiOutlineArrowDown } from "react-icons/ai";

const ShopPage = () => {
  // const [data, setData] = useState();
  const [page, setPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [heading, setHeading] = useState("");
  const [findProduct, setFindProduct] = useState(0);
  const [err, setErr] = useState(false);
  const [filterPrice, setFilterPrice] = useState(0);

  const handlePageClick = (dt) => {
    let numpage = dt.selected + 1;
    setCurrentPage(numpage);
  };

  // useEffect(() => {
  //   const getAll = async (currentPage) => {
  //     setLoading(true);
  //     setErr(false);
  //     let result = await axios.get(
  //       `http://localhost:8080/api/product/getallHome?page=${currentPage}&limit=12`
  //     );

  //     if (result.data.error === 0) {
  //       setPage(result.data.pageCount);
  //       setData(result.data.rows);
  //       setHeading(result.data.message);
  //       setFindProduct(result.data.rows.length);

  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 500);
  //     } else {
  //       setTimeout(() => {
  //         setErr(true);
  //       }, 500);
  //     }
  //   };
  //   getAll(currentPage);
  //   return () => {
  //     clearTimeout();
  //   };
  // }, [currentPage]);
  return (
    <>
      <div className="ms-shoppage">
        <div className="home-section">
          <section className="bg-light py-5">
            <div className="container">
              <h2 className="text-black">{heading}</h2>
              <ol className="breadcrumb ondark mb-0">
                <li className="breadcrumb-item">
                  <Link to={"/"}>Home</Link>
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                  Shop
                </li>
              </ol>
            </div>
          </section>

          <section className="padding-y">
            <div className="container">
              <div className="row">
                <aside className="col-lg-3">
                  <button
                    className="btn btn-outline-secondary mb-3 w-100  d-lg-none"
                    data-bs-toggle="collapse"
                    data-bs-target="#aside_filter"
                  >
                    Show filter
                  </button>

                  <div
                    id="aside_filter"
                    className="collapse card d-lg-block mb-5"
                  >
                    <article className="filter-group">
                      <header className="card-header">
                        <Link
                          to={""}
                          className="title"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_aside1"
                        >
                          <i className="icon-control fa fa-chevron-down"></i>{" "}
                          Category
                        </Link>
                      </header>
                      <div className="collapse show" id="collapse_aside1">
                        <div className="card-body">
                          <ul className="list-menu">
                            <li className="d-flex justify-content-center align-items-center my-2">
                              <input
                                type="checkbox"
                                id="filter1"
                                className="me-1"
                              />
                              <label htmlFor="filter1">Education</label>
                            </li>
                            <li className="d-flex justify-content-center align-items-center my-2">
                              <input
                                type="checkbox"
                                id="filter2"
                                className="me-1"
                              />
                              <label htmlFor="filter2">Education</label>
                            </li>
                            <li className="d-flex justify-content-center align-items-center my-2">
                              <input
                                type="checkbox"
                                id="filter3"
                                className="me-1"
                              />
                              <label htmlFor="filter3">Education</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </article>
                    <article className="filter-group">
                      <header className="card-header">
                        <Link
                          to={""}
                          className="title"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_aside2"
                        >
                          <i className="icon-control fa fa-chevron-down"></i>
                          Price
                        </Link>
                      </header>
                      <div className="collapse show" id="collapse_aside2">
                        <button className="btn btn-outline-primary m-1">
                          <span>{`< 100$`}</span>
                        </button>
                        <button className="btn btn-outline-primary m-1">
                          <span>{`< 500$`}</span>
                        </button>
                        <button className="btn btn-outline-primary m-1">
                          <span>{`< 1000$`}</span>
                        </button>
                      </div>
                    </article>
                  </div>
                </aside>
                <main className="col-lg-9">
                  <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                    <strong className="d-block py-2">
                      {findProduct} Items found
                    </strong>
                    <div className="ms-auto ">
                      <select className="form-select d-inline-block w-auto me-1">
                        <option value="0">Best seller</option>
                        <option value="1">New</option>
                        <option value="2">High rated</option>
                        <option value="3">Randomly</option>
                      </select>
                    </div>
                  </header>
                  <div className="row gx-4 gy-3 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    {loading ? (
                      <>
                        <div className="ms-loader text-center">
                          {err ? (
                            <>Load data failled</>
                          ) : (
                            <RingLoader
                              color="#36d7b7"
                              size={"100px"}
                              className="mx-auto"
                            />
                          )}
                        </div>
                      </>
                    ) : (
                      data &&
                      data?.length > 0 &&
                      data
                        ?.filter((product) => product?.price >= filterPrice)
                        ?.map((item, index) => (
                          <>
                            <div className="col-item">
                              <Product data={item} key={index} />
                            </div>
                          </>
                        ))
                    )}
                  </div>
                  <hr />
                  <footer className="d-flex mt-4">
                    <nav className="ms-3">
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
                    </nav>
                  </footer>
                </main>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
