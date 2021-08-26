import styled from "styled-components";

export const ContainerMasterHome = styled.section`
  max-width: 100%;
  width: 1396px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const ContainerHeader = styled.header`
  padding: 0 100px;

  @media (max-width: 1300px) {
    padding: 0;
  }
`;

export const ContainerNavigations = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 25px;
  gap: 50px;
  font-size: 26px;

  @media (max-width: 730px) {
    justify-content: center;
  }
`;

export const ContainerNavigationCategory = styled.section`
  max-width: 629px;
  min-width: 280px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ListCardsByCategory = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-top: 20px;

  @media (max-width: 1224px) {
    display: flex;
    gap: 15px;
    justify-content: center;
  }

  @media (max-width: 546px) {
    justify-content: space-around;
  }

  @media (max-width: 546px) {
    gap: initial;
  }
`;

export const DivisionFromNavigationMap = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div > img {
    margin-left: 44px;
  }

  @media (max-width: 730px) {
    display: none;
  }
`;

export const ContainerMapImage = styled.div`
  margin: 35px 0 0 35px;
  border-left: 3px solid #47c0a1;
`;

export const ContainerNavigationMobile = styled.div`
  display: none;

  @media (max-width: 730px) {
    height: 236px;
    max-width: 455px;
    min-width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #47c0a1;
    border-bottom: 2px solid #47c0a1;
    margin: 18px auto 33px;
  }
`;
