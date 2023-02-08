import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import "./Modal.css";

const Modal = (props) => {
  let active = props.active;
  let setActive = props.setActive;
  let user = props.user;

  const [avt, setAvt] = useState();
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState(0);

  const handleCancel = () => {
    setActive(false);
    setPassword("");
    setFullname("");
    setAddress("");
    setEmail("");
    setPhone("");
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

      let userUpdate = {
        id: user?.id,
        username: user.username,
        user_avt: avt,
        password: password,
        fullname: fullname,
        email: email,
        address: address,
        phone: phone,
        role: role,
      };

      let data = await axios.post(
        "http://localhost:8080/api/user/update",
        userUpdate
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
        setActive(false);
        return;
      }
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
      <div className={` ms-modal ms-pf ${active ? "active" : ""} `}>
        <div className="container">
          <div className="ms-section-heading my-3">Update User</div>
          <div className="row gx-3 gy-3">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-start ">
              <label htmlFor="username">User name</label>
              <input
                type="text"
                className="form-control my-1"
                id="username"
                value={user?.username}
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
                placeholder={user?.fullname}
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
                placeholder={user?.password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-start ">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control my-1"
                id="address"
                value={address}
                placeholder={user?.address}
                onChange={(e) => setAddress(e.target.value)}
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
                placeholder={user?.email}
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
                placeholder={user?.phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-start ">
              <label htmlFor="avt">Avatar</label>
              <input
                type="file"
                className="form-control my-1"
                id="avt"
                onChange={(e) => setAvt(e.target.files[0].name)}
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

export default Modal;
