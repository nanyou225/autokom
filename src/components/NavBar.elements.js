import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.NavBar};
  color: #fff;
  grid-area: nav;
  display: flex;
  justify-content: center;
  align-items: center;
`;
