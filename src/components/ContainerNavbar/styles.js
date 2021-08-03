import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  gap: 30px;
  margin: 34px 30px;
  .title-page {
    font-family: "Roboto";
    font-weight: 700;
    font-size: 22px;
  }
`;

const ArrowBack = styled.button`
  background-color: transparent;
  border: none;
`;

export { NavBar, ArrowBack };
