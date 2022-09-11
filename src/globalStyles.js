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
  /* grid-template-rows: 10% 5% 15% 5% 23% 5% 14% 8% 15%; */
  grid-template-rows: 10fr 5fr 15fr 5fr 23fr 5fr 14fr 8fr 15fr;
  grid-template-areas:
    "nav nav nav"
    "sidebar sidebar sidebar"
    "carouselBox carouselBox carouselBox"
    "carselBoxA carselBoxA carselBoxA"
    "main main main"
    "carselBoxB carselBoxB carselBoxB"
    "aboutA aboutB aboutB"
    "contentBox contentBox contentBox"
    "footer footer footer";
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    /* grid-template-rows: 5% 2.5% 7.5% 2.5% 11.5% 2.5% 7% 4% 7.5%; */
    grid-template-rows: 5fr 2.5fr 7.5fr 2.5fr 11.5fr 2.5fr 7fr 4fr 7.5fr;
    grid-template-areas:
      "nav"
      "sidebar"
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
