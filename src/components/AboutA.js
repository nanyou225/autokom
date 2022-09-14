import React from "react";
import ReactPlayer from "react-player";
import { AboutAD } from "./AboutA.elements";

const AboutA = () => {
  return (
    <AboutAD>
      <ReactPlayer
        width="600px"
        controls
        url="/assets/video_ma.mp4"
      />
    </AboutAD>
  );
};

export default AboutA;
