import styled from "styled-components";

export const ImmatBoxDiv = styled.div`
  grid-area: immatBox;
  background-color: #e8e8e8;
  padding: 30px;
  border-radius: 8px;
  position: relative;

  h1,
  h2,
  h3 {
    text-align: center;
  }

  span {
    color: red;
    position: absolute;
  }

  input {
    text-align: center;
    font-weight: 700;
    font-size: 25px;
    border: 2px solid #fb3d28;
    outline: #fb3d28;
    width: 320px;
    height: 50px;
    letter-spacing: 2px;
    border-radius: 4px;
  }

  button {
    background-color: #fb3d28;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    width: 320px;
    padding: 6px;
    border: 2px solid #fb3d28;
    border-radius: 4px;
    letter-spacing: 5px;

    &:hover {
      background-color: #fff;
      color: #fb3d28;
    }
  }
`;

// #e8e8e8
