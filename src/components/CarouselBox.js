import React from "react";
import { Carousel } from "react-carousel-minimal";
import carousel from "../carousel.json";
import { CarouselDiv } from "./CarouselBox.elements";
import ImmatBox from "./ImmatBox";

const CarouselBox = () => {
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "30px",
    fontWeight: "bold",
  };
  return (
    <CarouselDiv>
    <ImmatBox />
      <Carousel
        data={carousel}
        time={5000}
        captionStyle={captionStyle}
        width="800px"
        radius="8px"
        slideNumber={false}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
      />
    </CarouselDiv>
  );
};

export default CarouselBox;
