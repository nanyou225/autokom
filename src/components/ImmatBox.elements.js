import styled from "styled-components";

export const ImmatBoxDiv = styled.div`
  grid-area: immatBox;
  background-color: #E8E8E8;
  padding: 30px;
  border-radius: 8px;
  position: relative;

  span {
    color: red;
    position: absolute;
    margin-right: 5rem;
  }

  input {
    text-align: center;
    font-weight: 700;
    font-size: 25px;
    border: 2px solid #fb3d28;
    width: 320px;
    height: 50px;
    letter-spacing: 2px;
    border-radius: 4px;
  }

  button {
    font-size: 18px;
    font-weight: 400;
    width: 320px;
    padding: 6px;
    letter-spacing: 5px;

    &:hover {
      background-color: #fb3d28;
      color: #fff;
    }
  }
`;

// #e8e8e8
