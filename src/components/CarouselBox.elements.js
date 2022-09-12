import styled from "styled-components";

export const CarouselDiv = styled.div`
  grid-area: carouselBox;
  background: #fff;
  max-width: 1280px;
  margin: auto 8%;
  padding: 5px;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;

  .box {
    margin: inherit;
  }

  #thumbnail-div .thumbnail {
    border-radius: 8px;
  }
`;
