import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarselBoxAD } from "./CarselBoxA.elements";
import ImagItmes from "../listCarousel.json";

const CarselBoxA = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <CarselBoxAD>
      <Slider {...settings}>
        {ImagItmes &&
          ImagItmes.map((listCarousel) => {
            return (
              <div className="listCarouselA" key={listCarousel.id}>
                <img src={listCarousel.image} alt={listCarousel.caption} />
              </div>
            );
          })}
      </Slider>
    </CarselBoxAD>
  );
};

export default CarselBoxA;
