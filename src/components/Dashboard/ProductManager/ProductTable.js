import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";
import { addProduct } from "../../../redux/productSlice";

import "../userTable.css";
import { useDispatch } from "react-redux";

const ProductTable = (props) => {
  const dispatch = useDispatch();
  let dataProduct = props.dataProduct;
  let search = props.search;
  let setReProduct = props.setReProduct;

  const handleEdit = (item) => {
    dispatch(addProduct(item));
  };
  const handleDelete = async (item) => {
    let data = await axios.delete(
      `http://localhost:8080/api/product/delete/${item.id}`
    );

    if (data.data.error === 0) {
      toast.success(`${data.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      let newUSer = dataProduct.filter((product) => product.id !== item.id);
      setReProduct(newUSer);
      return;
    }
    toast.error(`${data.data.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return;
  };
  return (
    <>
      <table className="product-table table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>Product name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Product image</th>
            <th>Quantity</th>
            <th>Language</th>
            <th>Publisher</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataProduct &&
            dataProduct.length > 0 &&
            dataProduct
              .filter((product) => {
                if (search === "") {
                  return product;
                } else if (
                  product.product_name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  product.language
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  product.publisher.toLowerCase().includes(search.toLowerCase())
                ) {
                  return product;
                }
              })
              .map((item, index) => (
                <>
                  <tr key={item}>
                    <td>{index + 1}</td>
                    <td>{item.product_name}</td>
                    <td>{item.price} </td>
                    <td className="product-description">{item.description}</td>
                    <td>
                      <img
                        src={`http://localhost:8080/${item.product_image}`}
                        style={{
                          width: "60px",
                          height: "100px",
                        }}
                      />
                    </td>
                    <td>{item.quantity}</td>
                    <td>{item.language}</td>
                    <td>{item.publisher}</td>
                    <td>
                      {item.role === 1 ? (
                        <>
                          <Link
                            to={"/dashboard/account/detail"}
                            className="edit"
                            title=""
                            data-toggle="tooltip"
                            data-original-title="Edit"
                            onClick={() => handleEdit(item)}
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link
                            to={"/dashboard/product/detail"}
                            className="edit"
                            title=""
                            data-toggle="tooltip"
                            data-original-title="Edit"
                            onClick={() => handleEdit(item)}
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                          <button
                            className="delete"
                            title=""
                            data-toggle="tooltip"
                            data-original-title="Delete"
                            onClick={() => handleDelete(item)}
                          >
                            <i className="fa-regular fa-trash-can"></i>
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                </>
              ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
