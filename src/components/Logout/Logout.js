import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/cartSlice";

const Logout = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("user");
    dispatch(removeCart());
    let signout = setTimeout(() => {
      toast('🦄 Sign out success! It"s so easy', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigation("/");
    }, 1000);

    return () => {
      clearTimeout(signout);
    };
  }, []);

  return (
    <>
      <div
        className="ms-signout d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <HashLoader color="#36d7b7" />
      </div>
    </>
  );
};

export default Logout;
