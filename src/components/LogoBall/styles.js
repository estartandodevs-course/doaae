import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoBallStyled = styled.div``;

export const BallTop = styled.div`
  position: absolute;
  border-radius: 50%;
  top: -497px;
  left: -144px;
  width: 599px;
  height: 599px;
  background-color: #47c0a1;
  z-index: -1;

  @media (min-width: 468px) {
    display: none;
  }
  @media (min-width: 800px) {
    display: block;
    top: -441px;
    left: -103px;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;

  > img {
    margin-top: 10px;

    @media (min-width: 800px) {
      margin-top: 70px;
    }
  }
`;

export const GoBack = styled(Link)`
  position: absolute;
  top: 48px;
  left: 40px;
  width: 38px;
  height: 38px;
`;

export const BackIcon = styled.img``;
