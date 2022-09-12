import React from "react";
import AboutA from "../components/AboutA";
import AboutB from "../components/AboutB";
import CarouselBox from "../components/CarouselBox";
import CarselBoxA from "../components/CarselBoxA";
import CarselBoxB from "../components/CarselBoxB";
import Content1 from "../components/Content1";
import Content2 from "../components/Content2";
import Content3 from "../components/Content3";
import ContentBox from "../components/ContentBox";
import Footer from "../components/Footer";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Container } from "../globalStyles";

const HomePage = () => {
  return (
    <Container>
    <NavBar />
    <SideBar className="grid-class">SideBar</SideBar>
    <CarouselBox />
    <CarselBoxA />
    <Main />
    <CarselBoxB />
    <AboutA />
    <AboutB />
    <ContentBox>
      <Content1 />
      <Content2 />
      <Content3 />
    </ContentBox>
    <Footer />
  </Container>
  );
};

export default HomePage;
