import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarselBoxAD } from "./CarselBoxA.elements";

const CarselBoxA = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <CarselBoxAD>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </Slider>
    </CarselBoxAD>
  );
};

export default CarselBoxA;
