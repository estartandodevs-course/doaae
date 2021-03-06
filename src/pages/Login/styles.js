import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  width: 100%;

  max-width: 1700px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0 30px;
  overflow: hidden;
  box-sizing: border-box;
  @media (min-width: 800px) {
    display: flex;
    padding: inherit;
  }

  @media (max-width: 330px) {
    padding: 0;
  }
`;

export const BallBottom = styled.div`
  position: absolute;
  width: 790px;
  height: 580px;
  background-color: #47c0a1;
  bottom: -411px;
  right: -454px;
  border-radius: 50%;
`;

export const Form = styled.div`
  width: 308px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 67px;
  position: relative;
  padding-left: 20px;

  @media (max-width: 800px) {
    padding: 0;
  }
  @media (max-width: 330px) {
    width: 260px;
  }
`;

export const ContainerTitle = styled.div`
  width: 309px;

  @media (min-width: 800px) {
    display: none;
  }

  @media (max-width: 330px) {
    width: 260px;
  }
`;

export const Title = styled.h1`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
`;

export const Inputs = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 13px;
`;

export const ForgotPassword = styled(Link)`
  position: absolute;
  right: 0px;
  top: ${({ error }) => (error ? "159px" : "129px")};
  font-family: "Poppins";
  font-weight: 300;
  line-height: 24px;
  color: #898989;
  text-decoration: underline;

  @media (max-width: 325px) {
    top: ${({ error }) => (error ? "180px" : "150px")};
  }
`;

export const OptionsButtons = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreateAccount = styled(Link)`
  font-family: "Poppins";
  font-weight: 300;
  color: #389674;
  line-height: 24px;
  text-decoration: underline;
  margin: 8px 0 26px 0;
  text-align: center;
`;

export const ContainerLogin = styled.div`
  width: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 800px) {
    width: 400px;
  }
`;

export const ContainerImage = styled.div`
  width: auto;
  margin-left: auto;
  object-fit: cover;
  z-index: -4;
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    left: -1px;
    content: "";
    width: 160px;
    height: 100vh;
    background: linear-gradient(
      90deg,
      #ffffff 22%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContainerLogoBottom = styled.div`
  position: absolute;
  bottom: 5px;
  right: 0;
  z-index: 2;

  > img {
    width: 263px;
    height: 109px;
  }
`;

export const LogoEstartando = styled.img``;

export const ContainerLogoEstartando = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const EstartandoText = styled.span`
  color: #fff;
  font-size: 14px;
`;

export const ButtonForForm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || "308px"};
  height: ${({ height }) => height || "48px"};
  background-color: ${({ color }) => color || "#007067"};
  border-radius: 10px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.18);
  border: none;
  font-family: "Poppins";
  color: #fff9f9;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;

  &:disabled {
    background-color: #c5c5c5;
  }
`;
