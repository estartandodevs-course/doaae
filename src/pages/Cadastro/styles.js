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
    padding: 0;
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
  @media (min-width: 768px) {
    width: calc(100% - 400px);
    height: 700px;
    max-width: inherit;
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
    width: 400px;
  }
`;

export const ContainerDescription = styled.div`
  height: 441px;
  padding-left: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    width: 2px;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(71, 192, 161, 0) 0%,
      #47c0a1 30.21%,
      rgba(71, 192, 161, 0.929293) 70.31%,
      rgba(255, 255, 255, 0) 100%,
      rgba(71, 192, 161, 0) 100%
    );
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
