import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  @media (min-width: 376px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerMobile = styled.div`
  @media (min-width: 376px) {
    display: none;
  }
`;

export const ContainerDesktop = styled.div`
  display: none;
  @media (min-width: 376px) {
    display: block;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 33px;
  margin-bottom: 25px;
  gap: 15px;
`;

export const HeaderBackground = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Background = styled.img``;

export const Logo = styled.img`
  margin-top: -56px;
`;

export const Footer = styled.footer`
  text-align: center;
  font-size: 11px;
  color: #666;
  padding: 17px 0px;
`;
