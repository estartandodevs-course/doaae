import styled from "styled-components";

const Container = styled.main`
  min-height: 100vh;
  font-family: "Roboto";
`;

const HeaderBackground = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    margin-top: -56px;
  }
`;
export { Container, HeaderBackground };
