import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;

  max-width: 100%;
  width: 1700px;
  margin: 0 auto;
  @media (max-width: 945px) {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.header`
  margin-bottom: 37px;
  > div {
    height: initial;
  }
`;

export const SectionTitle = styled.h1``;

export const Form = styled.form`
  margin-top: 23px;
  > span {
    font-size: 19px;
    line-height: 26px;
    font-weight: 700;
    width: 315px;
  }

  > textarea {
    width: 100%;
    border-radius: 10px;
    font-size: 18px;
    font-family: "Poppins";
    font-weight: 300;
    padding: 11px;
    margin-bottom: 33px;
    box-sizing: border-box;
    resize: none;
    border: 2px solid #389674;
    outline: none;
  }

  @media (min-width: 945px) {
    margin-top: 106px;
  }
`;

export const Check = styled.div`
  margin-bottom: 23px;
`;

export const DateContainer = styled.div`
  margin-top: 14px;
  margin-bottom: 30px;
`;

export const ContainerMasterForm = styled.section`
  @media (min-width: 720px) {
    max-width: 100%;
    width: calc(100% - 400px);
    min-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerForm = styled.div`
  max-width: 315px;
`;

export const ContainerHeader = styled.div`
  display: none;

  @media (max-width: 945px) {
    display: block;
    > h1 {
      font-size: 19px;
      line-height: 26px;
      width: 315px;
    }

    > p {
      margin-bottom: 23px;
    }
  }
`;

export const ContainerInfo = styled.section`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 945px) {
    display: none;
  }

  &:after {
    position: absolute;
    top: 130px;
    right: -55px;
    content: "";
    width: 2px;
    height: 441px;
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

export const ContainerText = styled.div`
  width: 275px;
  margin-top: 69px;

  > h1 {
    font-size: 36px;
    line-height: 42px;
    color: #389674;
  }

  > p {
    margin-top: 17px;
    font-size: 22px;
    line-height: 26px;
  }
`;
