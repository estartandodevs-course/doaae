import styled from "styled-components";

export const Container = styled.main`
  padding: 30px 35px;
`;

export const Profiles = styled.div`
  display: flex;
  gap: 23px;
`;

export const NavBarContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ContainerDescriptionMobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
