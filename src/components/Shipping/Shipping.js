import React from "react";
import ShippingItem from "./ShippingItem";
import { FiCreditCard, FiRotateCw, FiPhoneCall } from "react-icons/fi";

let data = [
  {
    icon: <FiCreditCard />,
    title: "FREE SHIPPING WORLDWIDE",
    subtitle:
      "We offer free shipping via Standard Shipping on orders over $200.00",
  },
  {
    icon: <FiRotateCw />,
    title: "MONEY BACK GUARANTEE",
    subtitle:
      "We offer free shipping via Standard Shipping on orders over $200.00",
  },
  {
    icon: <FiPhoneCall />,
    title: "ONLINE SUPPORT 24/7",
    subtitle:
      "We offer free shipping via Standard Shipping on orders over $200.00",
  },
];
const Shipping = () => {
  return (
    <>
      <div
        className="ms-shipping"
        style={{
          backgroundColor: "rgb(251 251 251)",
          padding: "40px 0",
        }}
      >
        <div className="container">
          <div className="row">
            {data &&
              data.length > 0 &&
              data.map((item, index) => <ShippingItem data={item} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
