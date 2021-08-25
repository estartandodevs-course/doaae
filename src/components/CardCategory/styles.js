import styled from "styled-components";

export const ContainerCard = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 300px;
  width: 100%;
  min-width: 150px;
  height: 123px;
  border-radius: 10px;
  box-shadow: 0px 4px 16px rgb(0 0 0 / 18%);
  margin: 12px 2px;

  @media (max-width: 1225px) {
    flex-direction: column;
    width: 150px;
    padding: 12px 0;
  }
`;

export const ImageCategoryCard = styled.img`
  width: 94px;
  height: 94px;
  object-fit: contain;
`;

export const NameCategory = styled.p`
  font-weight: bold;
  font-size: 22.73px;
  line-height: 27px;

  @media (max-width: 1225px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const LimitBreak = styled.div`
  max-width: 132px;
  text-align: center;
`;
