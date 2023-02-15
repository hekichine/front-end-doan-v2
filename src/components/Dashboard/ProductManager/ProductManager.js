import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import ProductTable from "./ProductTable";
import axios from "axios";
import ReactPaginate from "react-paginate";

const ProductManager = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const handlePageClick = (dt) => {
    let numpage = dt.selected + 1;
    setCurrentPage(numpage);
    // console.log(currentPage);
  };

  useEffect(() => {
    setLoading(true);
    let callDataProduct = async (currentPage) => {
      let data = await axios.get(
        `http://localhost:8080/api/product/getall?page=${currentPage}&limit=5`
      );
      console.log(data.data);
      if (data && data.data.error !== "0") {
        setProduct(data.data.rows);
        setPage(data.data.pageCount);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    callDataProduct(currentPage);
    return () => {
      clearTimeout();
    };
  }, [currentPage]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="card mb-4">
            <div className="card-header text-start d-flex justify-content-between">
              <div className="ms-table-title">
                <i className="fas fa-table me-1"></i>
                Product Manager
              </div>
              <div className="ms-table-search">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search product"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="card-body">
              {loading ? (
                <BeatLoader color="#36d7b7" />
              ) : (
                <ProductTable
                  setReProduct={setProduct}
                  dataProduct={product}
                  search={search}
                />
              )}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductManager;