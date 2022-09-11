import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarselBoxAD } from "./CarselBoxA.elements";
import ImagItmes from "../brandImages.json";

const CarselBoxA = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <CarselBoxAD>
      <Slider {...settings}>
        {ImagItmes &&
          ImagItmes.map((brandImages) => {
            return (
              <div className="listCarouselA" key={brandImages.id}>
                <img src={brandImages.image} alt={brandImages.caption} />
              </div>
            );
          })}
      </Slider>
    </CarselBoxAD>
  );
};

export default CarselBoxA;
