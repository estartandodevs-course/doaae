import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  max-height: ${({ small }) => (small ? "347px" : "163px")};
  transition: height 0.4s ease-out;
  overflow-wrap: break-word;
`;

export const ContainerCape = styled.div`
  position: relative;
`;

export const Cape = styled.img`
  width: 100%;
  height: 163px;
  object-fit: cover;
`;

export const Category = styled.span`
  position: absolute;
  bottom: 3px;
  left: 0;

  padding: 6px 12px 4px 6px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  background-color: #007067;
  border-radius: 0 10px 0 0;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  padding: 11px 15px 11px 8px;
  box-sizing: border-box;
  border-left: 2px solid #007067;
  border-right: 2px solid #007067;
  border-bottom: 2px solid #007067;
  border-radius: 0 0 10px 10px;
  margin-top: -4px;
`;

export const Title = styled.h1`
  max-width: 250px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  margin: 10px 0 13px 0;
`;

export const Location = styled.h1`
  max-width: 250px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  margin-bottom: 8px;
`;

export const LocationInfo = styled.p`
  font-size: 12px;
  line-height: 15px;
  text-align: left;
`;
