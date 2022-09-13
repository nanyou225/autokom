import React from "react";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import { ContentBoxD } from "./ContentBox.elements";

const ContentBox = () => {
  return (
    <ContentBoxD>
      <Content1 />
      <Content2 />
      <Content3 />
    </ContentBoxD>
  );
};

export default ContentBox;
