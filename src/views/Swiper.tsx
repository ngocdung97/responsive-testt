import { Carousel } from "antd";
import React from "react";

const Banners = [
  {
    image: "banner1",
    name: "Chicky Run",
  },
  {
    image: "banner2",
    name: "FuteBol Fever",
  },
  {
    image: "banner1",
    name: "Chicky Run",
  },
  {
    image: "banner2",
    name: "FuteBol Fever",
  },
];
const SwiperComponent: React.FC = () => {
  const [gameName, setGameName] = React.useState<string>(Banners[0].name);
  const handleBeforeChange = (current: number, next: number) => {
    setGameName(Banners[next].name);
  };

  return (
    <>
      <Carousel autoplay draggable beforeChange={handleBeforeChange}>
        {Banners.map((banner, index) => (
          <div key={index}>
            <img
              src={`/images/banner/${banner.image}.jpg`}
              className="!md:object-fill md:h-[600px] h-[420px] md:object-fill object-cover w-full brightness-75 md:brightness-100"
              alt="hero"
            />
          </div>
        ))}
      </Carousel>

      <div className="absolute cursor-pointer brightness-125 md:hidden opacity-100 z-50 left-1/2 transform font-normal text-2xl -translate-x-1/2 top-[325px] text-white">
        {gameName}
      </div>

      <div className="absolute cursor-pointer brightness-125 md:hidden flex justify-center items-center gap-x-2 z-50 left-1/2 transform font-normal text-sm -translate-x-1/2 top-[370px] text-white">
        Game Details{" "}
        <img
          src="/images/icon/enter.png"
          className="w-3 h-3"
          alt="arrow-right"
        />
      </div>
    </>
  );
};

export default SwiperComponent;
