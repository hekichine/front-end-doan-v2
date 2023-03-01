import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../ProductList/Product";
import axios from "axios";
import RingLoader from "react-spinners/RingLoader";

import "./ShopPage.css";
import ReactPaginate from "react-paginate";

// import data from "../ProductList/dataProduct";

const ShopPage = () => {
  const [data, setData] = useState();
  const [page, setPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [heading, setHeading] = useState("");
  const [fintProduct, setFindProduct] = useState(0);
  const [err, setErr] = useState(false);
  const [filterPrice, setFilterPrice] = useState(0);

  const handlePageClick = (dt) => {
    let numpage = dt.selected + 1;
    setCurrentPage(numpage);
  };

  useEffect(() => {
    const getAll = async (currentPage) => {
      setLoading(true);
      setErr(false);
      let result = await axios.get(
        `http://localhost:8080/api/product/getallHome?page=${currentPage}&limit=12`
      );

      if (result.data.error === 0) {
        setPage(result.data.pageCount);
        setData(result.data.rows);
        setHeading(result.data.message);
        setFindProduct(result.data.rows.length);

        setTimeout(() => {
          setLoading(false);
        }, 500);
      } else {
        setTimeout(() => {
          setErr(true);
        }, 500);
      }
    };
    getAll(currentPage);
    return () => {
      clearTimeout();
    };
  }, [currentPage]);
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
                    className="collapse card d-lg-block d-none d-lg-none mb-5"
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
                          Related items
                        </Link>
                      </header>
                      <div className="collapse show" id="collapse_aside1">
                        <div className="card-body">
                          <ul className="list-menu">
                            <li>
                              <button
                                onClick={() => setFilterPrice(300 * 1000)}
                              >
                                Price &gt; 300k
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </article>

                    <article className="filter-group d-none">
                      <header className="card-header">
                        <Link
                          to={""}
                          className="title"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_aside_brands"
                        >
                          <i className="icon-control fa fa-chevron-down"></i>{" "}
                          Language
                        </Link>
                      </header>
                      <div className="collapse show" id="collapse_aside_brands">
                        <div className="card-body">
                          {/* {language &&
                            language?.length > 0 &&
                            language.map((item) => (
                              <>
                                {item}
                                <label className="form-check mb-2">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span className="form-check-label">
                                    {item}
                                  </span>
                                </label>
                              </>
                            ))} */}
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
                        <div className="card-body">
                          <label htmlFor="customRange3" className="form-label">
                            Example range
                          </label>
                          <input
                            type="range"
                            className="form-range"
                            min="0"
                            max="1000"
                            step="1"
                            id="customRange3"
                          />
                          <div className="row mb-3">
                            <div className="col-6">
                              <label htmlhtmlFor="min" className="form-label">
                                Min
                              </label>
                              <input
                                className="form-control"
                                id="min"
                                placeholder="$0"
                                type="number"
                              />
                            </div>

                            <div className="col-6">
                              <label htmlhtmlFor="max" className="form-label">
                                Max
                              </label>
                              <input
                                className="form-control"
                                id="max"
                                placeholder="$1,0000"
                                type="number"
                              />
                            </div>
                          </div>
                          <button className="btn btn-light w-100" type="button">
                            Apply
                          </button>
                        </div>
                      </div>
                    </article>

                    <article className="filter-group">
                      <header className="card-header">
                        <Link
                          to={""}
                          className="title"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_aside3"
                        >
                          <i className="icon-control fa fa-chevron-down"></i>{" "}
                          Size
                        </Link>
                      </header>
                      <div className="collapse show" id="collapse_aside3">
                        <div className="card-body">
                          <label className="checkbox-btn">
                            <input type="checkbox" />
                            <span className="btn btn-light"> XS </span>
                          </label>

                          <label className="checkbox-btn">
                            <input type="checkbox" />
                            <span className="btn btn-light"> SM </span>
                          </label>

                          <label className="checkbox-btn">
                            <input type="checkbox" />
                            <span className="btn btn-light"> LG </span>
                          </label>

                          <label className="checkbox-btn">
                            <input type="checkbox" />
                            <span className="btn btn-light"> XXL </span>
                          </label>
                        </div>
                      </div>
                    </article>
                  </div>
                </aside>
                <main className="col-lg-9">
                  <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                    <strong className="d-block py-2">
                      {fintProduct} Items found
                    </strong>
                    <div className="ms-auto ">
                      <select className="form-select d-inline-block w-auto me-1">
                        <option value="0">Best match</option>
                        <option value="1">Recommended</option>
                        <option value="2">High rated</option>
                        <option value="3">Randomly</option>
                      </select>
                    </div>
                  </header>

                  <div className="row gx-4 gy-3 ">
                    {loading ? (
                      <>
                        <div className="ms-loader text-center">
                          {err ? (
                            <>Load data faild</>
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
                        ?.map((item, index) => <Product data={item} />)
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
