import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    text-decoration:none;
    list-style:none
}

body{
  background-color: ${({ theme }) => theme.colors.body};
}
`;

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 10% 5% 15% 5% 23% 5% 14% 8% 15%;
  grid-template-areas:
    "nav nav nav"
    "sidebar sidebar sidebar"
    "immatBox carouselBox carouselBox"
    "carselBoxA carselBoxA carselBoxA"
    "main main main"
    "carselBoxB carselBoxB carselBoxB"
    "aboutA aboutB aboutB"
    "contentBox contentBox contentBox"
    "footer footer footer";
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 5% 2.5% 7.5% 2.5% 11.5% 2.5% 7% 4% 7.5%;
    grid-template-areas:
      "nav"
      "catgA"
      "catgB"
      "catgC"
      "immatBox"
      "carouselBox"
      "carselBoxA"
      "main"
      "carselBoxB"
      "aboutA"
      "aboutB"
      "contentBox"
      "footer";
  }
`;
