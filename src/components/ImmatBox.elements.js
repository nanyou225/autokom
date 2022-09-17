import styled from "styled-components";

export const ImmatBoxDiv = styled.div`
  grid-area: immatBox;
  background-color: #e8e8e8;
  padding: 30px;
  margin: auto;
  border-radius: 8px;
  position: relative;

  h1,
  h2,
  h4 {
    text-align: center;
  }
  p::before {
    content:" - ";
    margin-left: 45%;
    right: 0.5em;
  }
  p::after {
    content:" - ";
    left: 0.5em;
    margin-right: -45%;
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
    letter-spacing: 2px;
    border-radius: 4px;
  }
  .immatSear input {
    height: 50px;
  }

  button {
    background-color: #fb3d28;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    height: 45px;
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
