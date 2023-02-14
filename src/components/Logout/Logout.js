import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const navigation = useNavigate();
  useEffect(() => {
    localStorage.removeItem("user");
    setTimeout(() => {
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
      clearTimeout();
    };
  }, []);

  return <></>;
};

export default Logout;
