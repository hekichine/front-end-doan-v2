import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigation = useNavigate();
  useEffect(() => {
    localStorage.removeItem("user");
    navigation("/");
  }, []);

  return <></>;
};

export default Logout;
