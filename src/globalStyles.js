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
  grid-template-rows: 8% 5% 15% 5% 23% 5% 15% 8% 16%;
  grid-template-areas:
    "nav nav nav"
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
