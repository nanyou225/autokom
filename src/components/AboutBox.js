import React from "react";
import AboutA from "./AboutA";
import AboutB from "./AboutB";
import { AboutDiv } from "./AboutBox.elements";

const AboutBox = () => {
  return (
    <AboutDiv>
    <AboutA />
    <AboutB />
    </AboutDiv>
  );
};

export default AboutBox;
