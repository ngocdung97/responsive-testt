import { Carousel } from "antd";
import React, { useRef } from "react";

const btnStyle = {
  width: "60px",
  height: "40px",
  margin: "auto",
  background: "gray",
  border: "none",
  borderRadius: "0px 20px 20px 0px",
};

const SwiperComponent: React.FC = () => {
  return (
    <>
      <Carousel>
        <div>
          <img
            src="/images/banner/banner1.jpg"
            className="w-full !object-fill"
            style={{ width: "100%", height: "600px" }}
            alt="hero"
          />
        </div>
        <div>
          <img
            src="/images/banner/banner2.jpg"
            className="w-96 !object-fill"
            alt="hero"
            style={{ width: "100%", height: "600px" }}
          />
        </div>
      </Carousel>
    </>
  );
};

export default SwiperComponent;
