import { Carousel } from "antd";
import React from "react";

const Banners = ["banner1", "banner2", "banner1", "banner2"];
const SwiperComponent: React.FC = () => {
  return (
    <>
      <Carousel autoplay draggable>
        {Banners.map((banner, index) => (
          <div key={index}>
            <img
              src={`/images/banner/${banner}.jpg`}
              className="w-full !object-fill"
              style={{ width: "100%", height: "600px" }}
              alt="hero"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default SwiperComponent;
