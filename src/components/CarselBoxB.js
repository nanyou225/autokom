import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarselBoxBD } from "./CarselBoxB.elements";
import CarImage from "../carImages.json";

const CarselBoxB = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <CarselBoxBD>
      <Slider {...settings}>
        {CarImage &&
          CarImage.map((carImages) => {
            return (
              <div className="listCarouselB" key={carImages.id}>
                <img src={carImages.image} alt={carImages.caption} />
              </div>
            );
          })}
      </Slider>
    </CarselBoxBD>
  );
};

export default CarselBoxB;
