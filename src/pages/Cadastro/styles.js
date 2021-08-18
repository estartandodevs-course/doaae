import styled from "styled-components";

export const Container = styled.main`
  width: 100%;

  min-height: 100vh;
  margin: auto;
  padding: 30px;
  box-sizing: border-box;
  max-width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    max-width: 1700px;
    position: relative;
    display: flex;
    flex-direction: inherit;
    align-items: inherit;
  }
`;

export const Profiles = styled.div`
  display: flex;
  gap: 23px;
`;

export const ContainerForm = styled.div`
  max-width: 315px;
  @media (min-width: 768px) {
    max-width: inherit;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerLeft = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const ContainerDescription = styled.div`
  width: 310px;
  margin-top: 50px;
  padding-left: 34px;
  position: relative;

  &::after {
    position: absolute;
    top: -70px;
    right: 0;
    content: "";
    width: 2px;
    height: 442px;
    background: linear-gradient(
      180deg,
      rgba(71, 192, 161, 0) 0%,
      #47c0a1 30.21%,
      rgba(71, 192, 161, 0.929293) 70.31%,
      rgba(255, 255, 255, 0) 100%,
      rgba(71, 192, 161, 0) 100%
    );
  }
  @media (min-width: 2000px) {
    margin-top: 120px;
  }
`;

export const NavBarContainer = styled.div`
  align-self: flex-start;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ContainerDescriptionMobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
