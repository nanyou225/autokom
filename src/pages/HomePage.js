import React from "react";
import AboutBox from "../components/AboutBox";
import CarouselBox from "../components/CarouselBox";
import CarselBoxA from "../components/CarselBoxA";
import CarselBoxB from "../components/CarselBoxB";
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
      <SideBar />
      <CarouselBox />
      <Main />
      <AboutBox />
      <CarselBoxA />
      <CarselBoxB />
      <ContentBox/>
      <Footer />
    </Container>
  );
};

export default HomePage;
