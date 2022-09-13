import styled from "styled-components";

export const FooterD = styled.div`
  background-color: ${({ theme }) => theme.colors.Footer};
  color: #fff;
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
