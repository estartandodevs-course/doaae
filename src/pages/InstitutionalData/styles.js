import styled from "styled-components";

export const SectionOfPage = styled.section`
  margin: 0 auto;
`;

export const ContainerFromHeader = styled.div`
  max-width: 100%;
  width: 1396px;
  padding: 0 100px;
  margin: 0 auto;

  @media (max-width: 810px) {
    padding: 0 20px;
  }
`;

export const ImagefromInstitutional = styled.div`
  width: 100%;
  height: 254px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContainerInstitutionData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  max-width: 676px;
`;

export const InformationFromInstitution = styled.div`
  display: flex;
  gap: 10px;
  max-width: 100%;

  @media (max-width: 465px) {
    min-width: 256px;
    margin-top: 15px;
  }

  @media (max-width: 370px) {
    flex-direction: column;
  }

  > img {
    width: 127px;
    height: 127px;
    object-fit: cover;
    border-radius: 63px;
    filter: drop-shadow(0px 2px 16px rgba(0, 0, 0, 0.12));
    margin-top: -55px;
  }
`;

export const NameAndEvaluatioInstitution = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
  margin-top: 12px;
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
  max-width: 300px;
`;

export const CategoryItems = styled.span`
  font-size: 18px;
  line-height: 21px;
  color: #646464;
`;

export const PositionDataInstitution = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerDescription = styled.section`
  max-width: 690px;
  margin-top: 40px;
`;

export const AboutTheInstitution = styled.div`
  margin-top: 32px;

  > p {
    line-height: 20px;
  }
`;

export const GenericTitle = styled.h2`
  font-size: 36px;
  line-height: 42px;
  padding-bottom: 6px;
`;

export const ContainerActions = styled(ContainerDescription)`
  margin-bottom: 34px;
`;

export const ContainerCards = styled.section`
  display: flex;
  flex-direction: column;
  gap: 28px;
  box-sizing: border-box;
`;

export const ContainerFooter = styled.footer`
  min-height: 243px;
  margin-top: 34px;
  background-color: #007067;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  @media (max-width: 684px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
    gap: 10px;
  }
`;

export const SocialNetwork = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ContainerNetworkGeneric = styled.div`
  max-width: 300px;
  height: 106px;

  @media (max-width: 684px) {
    height: 80px;
  }
`;

export const ContainerContactGeneric = styled.div`
  border-left: 3px solid #ffff;
  margin: 10px 15px;
  padding-left: 15px;

  > p ~ p {
    margin-top: 10px;
  }
`;
