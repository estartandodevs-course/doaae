import styled from "styled-components";

export const ContainerEditarPerfil = styled.section`
  width: 100%;
  display: flex;
  min-height: 100vh;
  width: 100%;
  position: relative;
  max-width: 1700px;

  margin: 0 auto;
  @media (max-width: 1015px) {
    flex-direction: column;
    padding: 0 30px 30px 30px;
  }
`;

export const ContainerInfo = styled.section`
  width: 460px;

  h1 {
    color: #388596;
    font-size: 36px;
  }

  p {
    width: 280px;
    font-size: 22px;
    line-height: 26px;
  }

  @media (max-width: 1015px) {
    display: none;
  }
`;

export const ContainerText = styled.div`
  position: relative;
  height: 430px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 43px;

  &:after {
    position: absolute;
    right: 0;
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

export const ContainerForm = styled.section`
  width: calc(100% - 460px);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1015px) {
    margin: 0;
    width: 100%;
    align-self: center;
    flex-direction: column;
  }
`;

export const Text = styled.p`
  display: none;
  font-size: 18px;
  margin-bottom: 20px;
  @media (max-width: 1015px) {
    display: block;
  }
`;

export const Form = styled.form`
  display: flex;

  @media (max-width: 580px) {
    flex-direction: column;
    align-items: center;
    gap: 48px;
  }
`;

export const ContainerUploadImage = styled.div`
  width: 175px;
`;

export const ContainerInputs = styled.div`
  width: 312px;
  margin-left: 63px;

  @media (max-width: 580px) {
    margin: 0;
  }

  @media (max-width: 330px) {
    max-width: 260px;
  }
`;

export const ContainerHeader = styled.header`
  @media (min-width: 1015px) {
    display: none;
  }
`;
