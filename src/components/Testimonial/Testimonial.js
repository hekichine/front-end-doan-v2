import React from "react";

import "./Testimonial.css";
import bg from "./Testimonial-BG.webp";
const Testimonial = () => {
  return (
    <>
      <div
        className="ms-testimonial"
        style={{ backgroundImage: `url(${bg})`, marginBottom: "40px" }}
      >
        <div className="container">
          <div className="row ">
            <div className="ms-testi-inner col-12 align-items-center justify-content-center d-flex">
              <div className="ms-testi-image">
                <img
                  src="./assets/images/testimonial/team-01_small.webp"
                  alt=""
                  className="my-4"
                />
                <p className="ms-testi-content my-2">
                  {" "}
                  Sed vel urna at dui iaculis gravida. Maecenas pretium, velit
                  vitae placerat faucibus, velit quam facilisis elit, sit amet
                  lacinia est est id ligula. Duis feugiat quam non justo
                  faucibus, in gravida diam tempor. Nam viverra enim non ipsum
                  ornare, condimentum blandit diam mattis. Maecenas gravida
                  mol..
                </p>
                <p className="ms-testi-author">Gregory Milan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
