import React from 'react'
import AboutA from '../components/AboutA'
import AboutB from '../components/AboutB'
import CarouselBox from '../components/CarouselBox'
import CarselBoxA from '../components/CarselBoxA'
import CarselBoxB from '../components/CarselBoxB'
import CatgA from '../components/CatgA'
import CatgB from '../components/CatgB'
import CatgC from '../components/CatgC'
import Connexion from '../components/Connexion'
import Contact from '../components/Contact'
import Content1 from '../components/Content1'
import Content2 from '../components/Content2'
import Content3 from '../components/Content3'
import ContentBox from '../components/ContentBox'
import Footer from '../components/Footer'
import ImmatBox from '../components/ImmatBox'
import Logo from '../components/Logo'
import Main from '../components/Main'
import NavBar from '../components/NavBar'
import Panier from '../components/Panier'
import Search from '../components/Search'
import { Container } from '../globalStyles'

const HomePage = () => {
  return (
    <Container>
      <NavBar className="grid-class">
        <Logo>Logo</Logo>
        <Search>Search</Search>
        <Contact>Contact</Contact>
        <Connexion>Connexion</Connexion>
        <Panier>Panier</Panier>
      </NavBar>
      <CatgA className="grid-class">CatgA</CatgA>
      <CatgB className="grid-class">CatgB</CatgB>
      <CatgC className="grid-class">CatgC</CatgC>
      <ImmatBox className="grid-class">ImmatBox</ImmatBox>
      <CarouselBox className="grid-class">CarouselBox</CarouselBox>
      <CarselBoxA className="grid-class">CarselBoxA</CarselBoxA>
      <Main className="grid-class">Main</Main>
      <CarselBoxB className="grid-class">CarselBoxB</CarselBoxB>
      <AboutA className="grid-class">AboutA</AboutA>
      <AboutB className="grid-class">AboutB</AboutB>
      <ContentBox className="grid-class">
        <Content1>Content1</Content1>
        <Content2>Content2</Content2>
        <Content3>Content3</Content3>
      </ContentBox>
      <Footer className="grid-class">Footer</Footer>
    </Container>
  )
}

export default HomePage