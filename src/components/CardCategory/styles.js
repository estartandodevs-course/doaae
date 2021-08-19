import styled from "styled-components";

export const ContainerCard = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 280px;
  max-width: 300px;
  height: 123px;
  border-radius: 10px;
  box-shadow: 0px 4px 16px rgb(0 0 0 / 18%);
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
`;
