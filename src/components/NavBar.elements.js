import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.NavBar};
  color: #fff;
  grid-area: nav;
  display: flex;
  justify-content: center;
  align-items: center;

  header {
    width: 100%;
    height: 70px;
  }

  header .navbar {
    max-width: 1240px;
    margin: 0 auto;
    height: 100%;
    overflow: flex;
    display: flex;
    justify-content: space-between;
  }

  header .logo {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
  }

  header nav.navbar .logo a {
    color: #fff;
  }

  header nav.navbar .search {
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .hamburger {
    display: none;
    position: absolute;
    top: 2rem;
    right: 1rem;
  }

  .nav-menu {
    display: flex;
    align-items: center;
    justify-content: start;
    background: none;
  }
  .nav-item {
    padding: 0 1.2rem;
    font-size: 1.2rem;
  }

  .nav-item a {
    color: #fff;

    &:hover {
      border-bottom: 2px solid #fb3d28;
      width: auto;
      padding-bottom: 5px;
    }
  }

  @media screen and (max-width: 550px) {
    .hamburger {
      display: block;
    }
    .nav-menu {
      background-color: ${({ theme }) => theme.colors.NavBar};
      position: fixed;
      left: -100%;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      align-items: center;
      transition: all 0.25s ease-in-out;
    }
    .nav-menu.active {
      left: 0;
    }
    .nav-item {
      margin: 1.5rem 0;
      font-size: 1.5rem;
    }
  }
`;

export const NavSearch = styled.nav`
  align-self: center;
  margin-right: 2.5rem;

  .search-box {
    display: flex;
    margin: 0 auto;
    border-radius: 20px;
    border: none;
    outline: none;
    padding: 5px;
    width: 35rem;
    line-height: 25px;
    font-size: 17px;
    margin: inherit;
  }

  @media screen and (max-width: 550px) {
    .search-box {
      width: 100%;
      display: inline-flex;
      justify-content: center;
      margin-bottom: 15px;
      transition: all 0.25s ease-in-out;
    }
    .search-box input {
      width: 100%;
      /* width: 90%; */
    }
  }
`;


