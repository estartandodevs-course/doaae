import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  max-width: 100%;
  width: 1700px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  overflow-x: hidden;

  @media (max-width: 800px) {
    align-items: center;
    flex-direction: column;
    padding-bottom: 30px;
  }

  @media (min-width: 1700px) {
    overflow-x: visible;
  }
`;

export const ContainerInfo = styled.section`
  position: relative;
  width: 400px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ContainerText = styled.div`
  height: 441px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-left: 60px;

  &:after {
    position: absolute;
    right: 0;
    content: "";
    width: 2px;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(71, 192, 161, 0) 0%,
      #47c0a1 30.21%,
      rgba(71, 192, 161, 0.929293) 70.31%,
      rgba(255, 255, 255, 0) 100%,
      rgba(71, 192, 161, 0) 100%
    );
  }

  > h1 {
    font-size: 36px;
    line-height: 42px;
    width: 210px;
    color: #389674;
    margin-bottom: 20px;
  }

  > p {
    font-size: 22px;
    line-height: 26px;
    width: 263px;
  }
`;

export const ContainerDoacaoAgendada = styled.section`
  width: calc(100% - 400px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 42px;
    line-height: 42px;
    width: 250px;
    text-align: center;
  }

  > p {
    font-size: 18px;
    line-height: 27px;
    font-weight: 500;
    width: 278px;
    text-align: center;
    margin-bottom: 60px;

    @media (min-width: 800px) {
      display: none;
    }
  }
`;

export const ContainerHeader = styled.header`
  @media (min-width: 800px) {
    display: none;
  }
`;
