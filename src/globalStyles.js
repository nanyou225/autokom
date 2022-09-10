import styled from "styled-components";
const App = () => {
  return (
    <Container>
      <NavBar className="grid-class">
        <Logo>Logo</Logo>
        <SearchB>SearchB</SearchB>
        <ContactB>ContactB</ContactB>
        <ConnexionB>ConnexionB</ConnexionB>
        <PanierB>PanierB</PanierB>
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
  );
};

const Container = styled.div`
  display: grid;
  height: 100vh;
  margin: auto;
  max-width: 1280px;
  grid-template-rows: 8% 5% 15% 5% 23% 5% 15% 8% 16%;
  grid-template-areas:
    "navBar navBar navBar"
    "catgA catgB catgC"
    "immatBox carouselBox carouselBox"
    "carselBoxA carselBoxA carselBoxA"
    "main main main"
    "carselBoxB carselBoxB carselBoxB"
    "aboutA aboutB aboutB"
    "contentBox contentBox contentBox"
    "footer footer footer";

  .grid-class {
    background-color: steelblue;
    color: #fff;
    border: skyblue 1px solid;
    justify-content: center;
    align-items: center;
  }
`;

const NavBar = styled.div`
  grid-area: navBar;
  display: flex;
  justify-content: center;
`;
const Logo = styled.ul`
  grid-area: logo;
`;
const SearchB = styled.ul`
  grid-area: searchB;
`;
const ContactB = styled.ul`
  grid-area: contatB;
`;
const ConnexionB = styled.ul`
  grid-area: connexionB;
`;
const PanierB = styled.ul`
  grid-area: panierB;
`;

const CatgA = styled.div`
  grid-area: catgA;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CatgB = styled.div`
  grid-area: catgB;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CatgC = styled.div`
  grid-area: catgC;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImmatBox = styled.div`
  grid-area: immatBox;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselBox = styled.div`
  grid-area: carouselBox;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarselBoxA = styled.div`
  grid-area: carselBoxA;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  grid-area: main;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CarselBoxB = styled.div`
  grid-area: carselBoxB;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutA = styled.div`
  grid-area: aboutA;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AboutB = styled.div`
  grid-area: aboutB;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentBox = styled.div`
  grid-area: contentBox;
  display: flex;
  justify-content: center;
`;
const Content1 = styled.ul`
  grid-area: content1;
`;
const Content2 = styled(Content1)``;
const Content3 = styled(Content1)``;

const Footer = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
