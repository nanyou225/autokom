import React from "react";
import ReactPlayer from 'react-player'
import { AboutAD } from "./AboutA.elements";

const AboutA = () => {
  return (
    <AboutAD>
    <ReactPlayer url='/assets/video_ma.mp4' />
    </AboutAD>
  );
};

export default AboutA;
