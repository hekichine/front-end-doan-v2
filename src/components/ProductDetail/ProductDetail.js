import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./productdetail.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import Comment from "../Comment/Comment";
import CurrencyFormat from "react-currency-format";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  const [mainimg, setMainimg] = useState();
  const [listImg, setListImg] = useState();
  const [count, setCount] = useState(1);
  const cart = useSelector((state) => state.cart);
  let { id } = useParams();

  const getSingleProduct = async (id) => {
    let result = await axios.get(
      `http://localhost:8080/api/product/find/${id}`
    );
    if (result?.data?.error === 0) {
      setProduct(result?.data?.product[0]);
      setMainimg(result?.data?.product[0]?.product_image);
      setListImg(result?.data?.productImages);
    }
  };
  const handleChangImg = (item) => {
    setMainimg(item.image_url);
  };
  const handleCount = (e) => {
    if (e.target.value <= product.quantity) {
      setCount(e.target.value);
      return;
    }
    if (e.target.value <= 0) {
      setCount(1);
      return;
    }
    setCount(product.quantity);
  };
  const handleDecre = () => {
    setCount((prev) => prev - 1);
    if (count <= 1) {
      setCount(1);
    }
  };
  const handleIncre = () => {
    setCount((prev) => prev + 1);
    if (count >= product.quantity) {
      setCount(product.quantity);
    }
  };

  const handleAddCart = () => {
    let check = cart.some((item) => item.id === product.id);
    if (check) {
      toast.info("🦄 The product is already in the cart!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    let action = {
      ...product,
      count: count,
    };
    dispatch(addCart(action));
    toast.success("Add to cart success!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return;
  };
  useEffect(() => {
    getSingleProduct(id);
  }, [id]);
  return (
    <>
      <section className="ms-pr-detail">
        <div className="container mt-5 mb-5 ">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10">
              <div className="card">
                <div className="row gy-3">
                  <div className="col-lg-6 col-12">
                    <div className="images">
                      <div className="text-center main-image">
                        <img
                          id="main-image"
                          src={`http://localhost:8080/${mainimg}`}
                        />
                      </div>
                      <div className="thumbnail text-center">
                        {listImg &&
                          listImg.length > 0 &&
                          listImg?.map((img, index) => (
                            <div className="ms-img" key={img.image_url}>
                              <img
                                onClick={() => handleChangImg(img)}
                                src={`http://localhost:8080/${img.image_url}`}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="product text-start">
                      <div className=" mb-3 product-inner">
                        <h5 className="text-uppercase">
                          {product?.product_name}
                        </h5>
                        <div className="price d-flex flex-row align-items-center">
                          <span className="act-price me-3">
                            <CurrencyFormat
                              value={
                                product?.price -
                                (product?.price * product?.sale) / 100
                              }
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={""}
                              className={"me-1"}
                            />
                            đ
                          </span>
                          {product?.sale === 0 ? (
                            <></>
                          ) : (
                            <>
                              <div>
                                <small className="dis-price me-1">
                                  <CurrencyFormat
                                    value={product?.price}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={""}
                                    className={"me-1"}
                                  />
                                  đ
                                </small>
                                <span
                                  className="sale"
                                  style={{ color: "red", fontWeight: "700" }}
                                >
                                  {product?.sale}% OFF
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <p className="about">{product?.description}</p>
                      <p className="pr-detail-publisher my-2">
                        <span className="me-2">Publisher:</span>
                        {product?.publisher || "Chưa cập nhật"}
                      </p>
                      <div className="ms-stock">
                        <span className="me-1">Status:</span>
                        {product?.status === 1 ? (
                          <>
                            <span>
                              In-stock <br /> Quantity: {product?.quantity}
                            </span>
                          </>
                        ) : (
                          <span className="sold-out">SoldOut</span>
                        )}
                      </div>

                      <div className="cart mt-4 align-items-center d-flex">
                        <div className="ms-form-count me-3">
                          <button
                            className="ms-decre"
                            onClick={() => handleDecre()}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="form-control text-center"
                            value={count}
                            onChange={(e) => handleCount(e)}
                          />
                          <button
                            className="ms-incre"
                            onClick={() => handleIncre()}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="btn btn-danger text-uppercase mr-2 px-4"
                          onClick={() => handleAddCart()}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Comment id={id} />
      </section>
    </>
  );
};

export default ProductDetail;
