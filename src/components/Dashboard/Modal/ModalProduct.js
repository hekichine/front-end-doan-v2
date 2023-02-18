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
  const [username, setProductname] = useState(product?.username);
  const [avt, setAvt] = useState(product?.user_image);
  const [password, setPassword] = useState(product?.password);
  const [fullname, setFullname] = useState(product?.fullname);
  const [email, setEmail] = useState(product?.email);
  const [phone, setPhone] = useState(product?.phone);
  const [role, setRole] = useState(product?.role);

  const handleCancel = () => {
    navigation("/dashboard/product");
  };
  const handleSubmit = async () => {
    if (email && password) {
      if (password.length <= 5) {
        toast.error("Password is less 6 character", {
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
      }
      let formData = new FormData();
      formData.append("id", id);
      formData.append("username", username);
      formData.append("user_image", avt);
      formData.append("password", password);
      formData.append("fullname", fullname);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("role", role);
      // let userUpdate = {
      //   id: product?.id,
      //   username: product.username,
      //   user_avt: avt,
      //   password: password,
      //   fullname: fullname,
      //   email: email,
      //   address: address,
      //   phone: phone,
      //   role: role,
      // };
      // console.log(formData);
      // return;
      let data = await axios.post(
        "http://localhost:8080/api/product/update",
        formData
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
        navigation("/dashboard/product");

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
    }
    toast.error("Email or password is valid", {
      position: "top-right",
      autoClose: 5000,
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
              <label htmlFor="username">product name</label>
              <input
                type="text"
                className="form-control my-1"
                id="username"
                value={username}
                readOnly="true"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-start ">
              <label htmlFor="fullname">Full name</label>
              <input
                type="text"
                className="form-control my-1"
                id="fullname"
                value={fullname}
                placeholder={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-start ">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control my-1"
                id="password"
                value={password}
                placeholder={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-start ">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control my-1"
                id="email"
                required
                value={email}
                placeholder={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-start ">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className="form-control my-1"
                id="phone"
                value={phone}
                required
                placeholder={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-start ">
              <label htmlFor="avt">Avatar</label>
              <input
                type="file"
                className="form-control my-1"
                id="avt"
                onChange={(e) => setAvt(e.target.files[0])}
                accept={"image/jpg image/jpeg image/png"}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-start ">
              <label htmlFor="role">Role</label>
              <select
                name="role"
                id="role"
                className="form-select my-1"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="0" selected>
                  ---
                </option>
                <option value="1">Admin</option>
                <option value="2">Member</option>
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
