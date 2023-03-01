import React from "react";
import Flickity from "react-flickity-component";
import { Link } from "react-router-dom";

import "./slider.css";

const Slider = () => {
  const flickityOptions = {
    initialIndex: 2,
    wrapAround: true,
    prevNextButtons: true,
    pageDots: false,
    groupCell: "100%",
    autoPlay: "true",
    arrowShape: { x0: 35, x1: 60, y1: 20, x2: 65, y2: 15, x3: 45 },
  };
  return (
    <>
      <section className="ms-slide">
        <div className="ms-section-inner container-fluid">
          <Flickity
            className={"ms-slideshow row"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            <div className="ms-slideshow-item col-12">
              <div className="ms-slideshow-inner">
                <div className="ms-content-image">
                  <img
                    src="./assets/slide_image/PngItem_4828023.png"
                    alt="slideimage"
                  />
                </div>
                <div className="ms-content-wrap ms-po">
                  <div className="ms-content-inner container ms-po text-start">
                    <div className="ms-content-row row">
                      <div className="ms-content-item col-xl-5 col-lg-6 col-md-8 col-sm-12 text-lg-center text-sm-start text-center">
                        <p className="ms-text-title">
                          don't miss today's featured deals
                        </p>
                        <p className="ms-text-heading">usen beauty</p>
                        <p className="ms-text-subheading">
                          Here to bring your life style to the next level.
                        </p>
                        <Link to="#" className="ms-slideshow-btn">
                          shop now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ms-slideshow-item col-12">
              <div className="ms-slideshow-inner">
                <div className="ms-content-image">
                  <img
                    src="./assets/slide_image/PngItem_4828023.png"
                    alt="slideimage"
                  />
                </div>
                <div className="ms-content-wrap ms-po">
                  <div className="ms-content-inner container ms-po text-start">
                    <div className="ms-content-row row">
                      <div className="ms-content-item col-xl-5 col-lg-6 col-md-8 col-sm-12 text-lg-center text-sm-start text-center">
                        <p className="ms-text-title">
                          don't miss today's featured deals
                        </p>
                        <p className="ms-text-heading">usen beauty</p>
                        <p className="ms-text-subheading">
                          Here to bring your life style to the next level.
                        </p>
                        <Link to="#" className="ms-slideshow-btn">
                          shop now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ms-slideshow-item col-12">
              <div className="ms-slideshow-inner">
                <div className="ms-content-image">
                  <img
                    src="./assets/slide_image/PngItem_4828023.png"
                    alt="slideimage"
                  />
                </div>
                <div className="ms-content-wrap ms-po">
                  <div className="ms-content-inner container ms-po text-start">
                    <div className="ms-content-row row">
                      <div className="ms-content-item col-xl-5 col-lg-6 col-md-8 col-sm-12 text-lg-center text-sm-start text-center">
                        <p className="ms-text-title">
                          don't miss today's featured deals
                        </p>
                        <p className="ms-text-heading">usen beauty</p>
                        <p className="ms-text-subheading">
                          Here to bring your life style to the next level.
                        </p>
                        <Link to="#" className="ms-slideshow-btn">
                          shop now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Flickity>
        </div>
      </section>
    </>
  );
};

export default Slider;
