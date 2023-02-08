import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../ProductList/Product";
import axios from "axios";

import "./ShopPage.css";

// import data from "../ProductList/dataProduct";

const ShopPage = () => {
  const [data, setData] = useState();
  const getAll = async () => {
    let data = await axios.get("http://localhost:8080/api/product/getall");
    if (data.data.error === 0) {
      setData(data.data.product_list);
    }
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <>
      <div className="ms-shoppage">
        <div className="home-section">
          <section className="bg-light py-5">
            <div className="container">
              <h2 className="text-black">Category: Book</h2>
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
                          Related items
                        </Link>
                      </header>
                      <div className="collapse show" id="collapse_aside1">
                        <div className="card-body">
                          <ul className="list-menu">
                            <li>
                              <Link to={""}>Electronics </Link>
                            </li>
                            <li>
                              <Link to={""}>Accessories </Link>
                            </li>
                            <li>
                              <Link to={""}>Home items </Link>
                            </li>
                            <li>
                              <Link to={""}>Men's clothing </Link>
                            </li>
                            <li>
                              <Link to={""}>Interior items </Link>
                            </li>
                            <li>
                              <Link to={""}>Magazines </Link>
                            </li>
                            <li>
                              <Link to={""}>Category name </Link>
                            </li>
                            <li>
                              <Link to={""}>Home items </Link>
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
                          data-bs-target="#collapse_aside_brands"
                        >
                          <i className="icon-control fa fa-chevron-down"></i>{" "}
                          Brands
                        </Link>
                      </header>
                      <div className="collapse show" id="collapse_aside_brands">
                        <div className="card-body">
                          <label className="form-check mb-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label"> Mercedes </span>
                            <b className="badge rounded-pill bg-gray-dark float-end">
                              120
                            </b>
                          </label>

                          <label className="form-check mb-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label"> Toyota </span>
                            <b className="badge rounded-pill bg-gray-dark float-end">
                              15
                            </b>
                          </label>

                          <label className="form-check mb-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label">
                              {" "}
                              Mitsubishi{" "}
                            </span>
                            <b className="badge rounded-pill bg-gray-dark float-end">
                              35
                            </b>
                          </label>

                          <label className="form-check mb-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label"> Nissan </span>
                            <b className="badge rounded-pill bg-gray-dark float-end">
                              89
                            </b>
                          </label>

                          <label className="form-check mb-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label"> Honda </span>
                            <b className="badge rounded-pill bg-gray-dark float-end">
                              30
                            </b>
                          </label>

                          <label className="form-check mb-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label">
                              {" "}
                              Honda accord{" "}
                            </span>
                            <b className="badge rounded-pill bg-gray-dark float-end">
                              30
                            </b>
                          </label>
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
                          <i className="icon-control fa fa-chevron-down"></i>{" "}
                          Price
                        </Link>
                      </header>
                      <div className="collapse show" id="collapse_aside2">
                        <div className="card-body">
                          <input
                            type="range"
                            className="form-range"
                            min="0"
                            max="100"
                          />
                          <div className="row mb-3">
                            <div className="col-6">
                              <label htmlFor="min" className="form-label">
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
                              <label htmlFor="max" className="form-label">
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
                    <strong className="d-block py-2">32 Items found </strong>
                    <div className="ms-auto ">
                      <select className="form-select d-inline-block w-auto me-1">
                        <option value="0">Best match</option>
                        <option value="1">Recommended</option>
                        <option value="2">High rated</option>
                        <option value="3">Randomly</option>
                      </select>
                    </div>
                  </header>

                  <div className="row gx-4 gy-3">
                    {data &&
                      data.length > 0 &&
                      data.map((item, index) => <Product data={item} />)}
                  </div>

                  <hr />

                  <footer className="d-flex mt-4">
                    <nav className="ms-3">
                      <ul className="pagination">
                        <li className="page-item">
                          <Link className="page-link" to={""}>
                            1
                          </Link>
                        </li>
                        <li className="page-item active" aria-current="page">
                          <span className="page-link">2</span>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to={""}>
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to={""}>
                            Next
                          </Link>
                        </li>
                      </ul>
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
