import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0 30px;
  overflow: hidden;
  @media (min-width: 800px) {
    display: flex;
    padding: inherit;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 67px;
  position: relative;
  padding: 0 30px;
`;

export const ContainerTitle = styled.div`
  width: 309px;

  @media (min-width: 800px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
`;

export const Inputs = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 13px;
`;

export const ForgotPassword = styled(Link)`
  position: absolute;
  right: 0px;
  top: ${({ error }) => (error ? "155px" : "129px")};
  font-family: "Poppins";
  font-weight: 300;
  line-height: 24px;
  color: #898989;
  text-decoration: underline;
`;

export const OptionsButtons = styled.div`
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
  @media (min-width: 800px) {
    width: 400px;
    padding-top: 25px;
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
    left: 0;
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
