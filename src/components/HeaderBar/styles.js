import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const Profile = styled(Link)``;

export const Exit = styled.img``;

export const ExitLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const Back = styled.img``;

export const BackLink = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`;

export const LogoText = styled.span`
  font-size: 22px;
  font-weight: 700;
`;

export const Login = styled(Link)`
  font-size: 18px;
  font-weight: 700;
  color: #389674;
  text-decoration: none;
`;
