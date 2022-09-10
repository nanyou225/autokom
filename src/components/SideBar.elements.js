import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.Catalogue};
  grid-area: sidebar;
  display: flex;
  height: auto;
  flex-wrap: wrap;

  .header-catCpy-text {
    max-width: 1280px;
    margin: auto 0;

    li {
      display: inline-block;
      text-transform: Capitalize;
      font-size: 16px;
    }
    a {
      color: #fff;
      margin-right: 20px;

      &:hover {
        color: #fb3d28;
        transition: all 0.3s ease;
      }
    }
  }

  .header-cat-text {
    text-transform: Capitalize;
    font-size: 16px;
    max-width: 1240px;
    margin: auto;

    li {
      position: relative;
      text-align: left;
    }
    a {
      display: inline-block;
      padding: 8px 25px;
      color: #333;
    }
  }

  .header-cat-text li .catalogue {
    color: #fff;
    margin: 0.2rem 0;
  }

  .header-cat-text li a:hover {
    color: #fb3d28;
    transition: all 0.3s ease;
  }

  .header-cat-text li ul.dropdown {
    opacity: 0;
    visibility: hidden;
    background: #fff;
    position: absolute;
    z-index: 1000;
    left: 0;
  }
  .header-cat-text li:hover ul.dropdown {
    opacity: 1;
    visibility: visible;
    width: 77rem;
    height: 78vh;
    padding: 0.8rem 0;
    transition: 0.5s;
    transform: translateY(1px);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
