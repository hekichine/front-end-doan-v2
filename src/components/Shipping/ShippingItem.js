import React from "react";

import "./ShippingItem.css";

const ShippingItem = (props) => {
  let data = props.data;
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 col-xl-4 shipping-item">
        <div className="shipping-inner text-center">
          {data.icon}
          <p>{data.title}</p>
          <span>{data.subtitle}</span>
        </div>
      </div>
    </>
  );
};

export default ShippingItem;
