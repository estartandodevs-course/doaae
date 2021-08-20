import styled from "styled-components";

export const DescriptionTitle = styled.span`
  font-size: 36px;
  font-weight: 700;
  line-height: 42.19px;
  color: ${({ color }) => color};
`;

export const DescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-top: 36px;
  width: 260px;
  margin-bottom: 36px;
`;

export const Text = styled.p`
  font-size: 22px;
  line-height: 26px;
  margin-top: ${({ margin }) => margin};
  margin-bottom: ${({ margin }) => margin};
`;
