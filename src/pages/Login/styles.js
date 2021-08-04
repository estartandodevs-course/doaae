import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  padding: 0 30px;
`;

export const ContainerBall = styled.div``;

export const Ball = styled.div`
  position: absolute;
  border-radius: 50%;
  top: -497px;
  left: -110px;
  width: 599px;
  height: 599px;
  background-color: #47c0a1;
  z-index: -1;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  > img {
    margin-top: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 67px;
  position: relative;
`;

export const Title = styled.h1`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
`;

export const Inputs = styled.div`
  margin-top: 13px;
`;

export const ForgotPassword = styled(Link)`
  position: absolute;
  right: 8px;
  top: ${({ error }) => (error ? "203px" : "173px")};
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
  margin: 8px 35px;
  text-align: center;
`;
