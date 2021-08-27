import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 95px;
`;

export const ContainerExit = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const ProfileIcon = styled.img`
  width: 37px;
  height: 37px;
  object-fit: cover;
`;

export const InputDesktop = styled.div`
  display: none;
  @media (min-width: 672px) {
    display: block;
    margin-left: 35px;
  }
`;

export const Profile = styled(Link)``;

export const Exit = styled.img``;

export const ExitLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const Back = styled.img``;

export const BackLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoText = styled.span`
  font-size: 22px;
  font-weight: 700;
  padding-right: 35px;

  @media (max-width: 322px) {
    font-size: 19px;
    padding-right: 0;
  }
`;

export const Login = styled(Link)`
  font-size: 18px;
  font-weight: 700;
  color: #389674;
  text-decoration: none;

  @media (max-width: 322px) {
    font-size: 15px;
  }
`;

export const PositionInputMobile = styled.div`
  display: none;
  @media (max-width: 672px) {
    display: block;
    margin-left: 35px;
  }

  @media (max-width: 402px) {
    display: flex;
    justify-content: center;
    margin-left: 0;
  }
`;
