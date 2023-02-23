import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import "./Modal.css";
import { useDispatch, useSelector } from "react-redux";

import { removeProduct } from "../../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const ModalProduct = (props) => {
  const product = useSelector((state) => state.product.data);

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [id, setId] = useState(product?.id);
  const [productname, setProductname] = useState(product?.product_name);
  const [price, setPrice] = useState(product?.price);
  const [sale, setSale] = useState(product?.sale);
  const [des, setDes] = useState(product?.description);
  const [quantity, setQuantity] = useState(product?.quantity);
  const [language, setLanguage] = useState(product?.language);
  const [publisher, setPublisher] = useState(product?.publisher);
  const [prstatus, setStatus] = useState(product?.status);

  const handleCancel = () => {
    navigation("/dashboard/product");
  };

  const handleSubmit = async () => {
    if (sale < 0 || sale > 100) {
      toast.warn("Sale invalid. Must be 0 - 100", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (!quantity) {
      toast.warn("Quantity invalid. Must be number", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    let product = {
      id: id,
      product_name: productname,
      price: price,
      sale: sale,
      description: des,
      quantity: quantity,
      language: language,
      publisher: publisher,
      status: prstatus,
    };

    let data = await axios.post(
      "http://localhost:8080/api/product/update",
      product
    );

    if (data.data.error === 0) {
      toast.success(`${data.data.message}`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigation("/dashboard/product");

      return;
    }
    toast.error(`${data.data.message}`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <div className={`ms-modal ms-pf`}>
        <div className="container">
          <div className="ms-section-heading my-3">Update product</div>
          <div className="row gx-3 gy-3">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-start ">
              <label htmlFor="username">Product name</label>
              <input
                type="text"
                className="form-control my-1"
                id="username"
                value={productname}
                onChange={(e) => setProductname(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-start ">
              <label htmlFor="fullname">Price</label>
              <input
                type="text"
                className="form-control my-1"
                id="fullname"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-start ">
              <label htmlFor="password">Sale(%)</label>
              <input
                type="number"
                className="form-control my-1"
                id="password"
                value={sale}
                onChange={(e) => setSale(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-start ">
              <label htmlFor="email">Description</label>
              <textarea
                type="text"
                className="form-control my-1"
                id="email"
                value={des}
                onChange={(e) => setDes(e.target.value)}
                style={{ height: "200px" }}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-start ">
              <label htmlFor="phone">Quantity</label>
              <input
                type="number"
                className="form-control my-1"
                id="phone"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-start ">
              <label htmlFor="avt">Language</label>
              <input
                type="text"
                className="form-control my-1"
                id="avt"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-start ">
              <label htmlFor="avt1">Publisher</label>
              <input
                type="text"
                className="form-control my-1"
                id="avt1"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-start ">
              <label htmlFor="role">Status</label>
              <select
                name="role"
                id="role"
                className="form-select my-1"
                value={prstatus}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="1">Enable</option>
                <option value="2">Disable</option>
              </select>
            </div>
            <div className="col-12">
              <button
                className=" btn btn-danger mx-3"
                onClick={() => handleCancel()}
              >
                Cancel
              </button>
              <button
                className=" btn btn-primary mx-3"
                onClick={() => handleSubmit()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalProduct;
