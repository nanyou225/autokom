import styled from "styled-components";

export const ImmatBoxDiv = styled.div`
  grid-area: immatBox;
  background-color: #fff;
  max-width: 1280px;
  margin: auto;
  padding: 30px;
  border-radius: 8px;
  color: black;

  input {
    text-align: center;
    font-weight: 700;
    width: 320px;
    height: 35px;
    letter-spacing: 2px;
    border-radius: 4px;
  }

  button {
    font-weight: 400;
    width: 320px;
    padding: 6px;
    letter-spacing: 5px;
    font-size: 18px;
    margin-bottom: 20px;

    &:hover {
      color: #fb3d28;
    }
  }
`;
