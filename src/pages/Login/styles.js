import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  padding: 0 30px;
`;

export const Ball = styled.div`
  position: fixed;
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
  align-items: center;
  margin-top: 67px;
  position: relative;
`;

export const TitleContainer = styled.div`
  width: 309px;
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
