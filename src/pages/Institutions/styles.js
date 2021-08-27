import styled from "styled-components";

export const ContainerMaster = styled.section`
  max-width: 100%;
  width: 1396px;
  margin: 0 auto;
  padding: 0 30px;
  min-height: 100vh;
`;

export const ContainerHeader = styled.header`
  padding: 0 100px;

  @media (max-width: 1334px) {
    padding: 0px;
  }
`;

export const ContainerCardsInstituitions = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  margin: 30px 0 30px 0;
`;
