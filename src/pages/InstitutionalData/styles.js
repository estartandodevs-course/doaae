import styled from "styled-components";

export const ContainerFromHeader = styled.div`
  padding: 0 20px;
`;

export const ImagefromInstitutional = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  width: 100%;
  height: 254px;
  background-color: red;
  > div {
    width: 127px;
    height: 127px;
    background-color: yellow;
    border-radius: 63px;
    filter: drop-shadow(0px 2px 16px rgba(0, 0, 0, 0.12));
    position: absolute;
    top: 186px;
    left: 134px;
    @media (max-width: 600px) {
      left: 14px;
    }
  }
`;

export const ContainerInstitutionData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;
  padding: 0 20px;
`;

export const InformationFromInstitution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 582px;
  max-width: 100%;

  @media (max-width: 465px) {
    min-width: 264px;
    margin-top: 15px;
  }
`;

export const NameAndEvaluatioInstitution = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin-top: 12px;

  @media (max-width: 465px) {
    width: 150px;
  }
`;

export const NameInstitution = styled.span`
  font-weight: 700;
  font-size: 22px;
  line-height: 25px;
`;

export const EvaluationInstitution = styled.span`
  font-size: 20px;
  line-height: 23px;
  color: #007067;
`;

export const ContainerCategoriesOfInstitutions = styled.div`
  margin-top: 10px;
  width: 300px;

  @media (max-width: 465px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const CategoryItems = styled.span`
  font-size: 18px;
  line-height: 21px;
  color: #646464;
`;
