import styled from "styled-components";

export const ImmatBoxDiv = styled.div`
  grid-area: immatBox;
  background-color: #e8e8e8;
  padding: 30px;
  margin: auto;
  border-radius: 8px;
  position: relative;

  p::before {
    content: "";
    margin-left: 10%;
    right: 0.5em;
    background-color: #29323c;
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 35%;
    box-sizing: inherit;
  }
  p::after {
    content: "";
    margin-right: -10%;
    left: 0.5em;
    background-color: #29323c;
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 35%;
    box-sizing: inherit;
  }

  input {
    text-align: center;
    font-weight: 700;
    font-size: 25px;
    border: 2px solid #fb3d28;
    outline: #fb3d28;
    letter-spacing: 2px;
    border-radius: 4px;
    display: flex;
  }
  .immatSear input {
    height: 50px;
    position: relative;
  }

  span.flag {
    float: right;
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
      transition: all 0.3s ease;
      color: #fb3d28;
    }
  }
`;
