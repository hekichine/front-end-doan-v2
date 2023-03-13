import axios from "axios";
import React, { useEffect } from "react";

import "./Order.css";

const Order = () => {
  useEffect(() => {
    let fetchOrder = async () => {
      let orders = await axios.get("http://localhost:8080/api/v1/orders");
      console.log(orders);
    };
    fetchOrder();
  }, []);
  return (
    <>
      <h3 className="text-center m-5">Orders</h3>
      <div className="ms-order-table">
        <table>
          <thead>
            <th></th>
            <th></th>
          </thead>
        </table>
      </div>
    </>
  );
};

export default Order;
