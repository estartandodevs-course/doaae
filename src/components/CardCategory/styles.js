import styled from "styled-components";

export const ContainerCard = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 300px;
  min-width: 150px;
  height: 123px;
  border-radius: 10px;
  box-shadow: 0px 4px 16px rgb(0 0 0 / 18%);

  @media (max-width: 540px) {
    flex-direction: column;
    width: 150px;
    padding: 12px 0;
  }
`;

export const ImageCategoryCard = styled.img`
  width: 94px;
  height: 94px;
  object-fit: cover;
`;

export const NameCategory = styled.span`
  font-weight: bold;
  font-size: 22.73px;
  line-height: 27px;

  @media (max-width: 540px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const LimitBreak = styled.div`
  max-width: 132px;
  text-align: center;
`;
