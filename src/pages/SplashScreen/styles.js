import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
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

export const Logo = styled.img`
  margin-top: -56px;
`;

export const Footer = styled.footer`
  text-align: center;
  font-size: 11px;
  color: #666;
  padding: 17px 0px;
`;
