import styled from "styled-components";

export const ContainerMasterHome = styled.section`
  padding: 0 80px;
`;

export const ContainerNavigations = styled.section`
  display: flex;
  width: 100%;
  margin-top: 25px;
`;

export const ContainerNavigationCategory = styled.section`
  max-width: 500px;
  min-width: 280px;
  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ListCardsByCategory = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
