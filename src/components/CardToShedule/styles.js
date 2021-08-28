import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  border: 2px solid #007067;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 9px 21px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5px;

  @media (min-width: 739px) {
    gap: 20px;
    padding: 27px 21px;
  }
`;

export const Title = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;

  @media (min-width: 739px) {
    font-size: 18px;
  }
`;

export const ContainerText = styled.div`
  max-width: 564px;
  min-width: 200px;
`;

export const Text = styled.p`
  font-size: 12px;
  width: 100%;
  text-align: center;
  line-height: 15px;
  padding-top: 3px;
  border-top: 1px solid #007067;

  @media (min-width: 739px) {
    font-size: 16px;
    margin-bottom: 30px;
    padding-top: 20px;
  }
`;

export const Button = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  font-size: 10px;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  line-height: 15px;

  background: #007067;
  box-shadow: 0px 2.15584px 8.62338px rgba(0, 0, 0, 0.18);
  border-radius: 5.38961px;

  text-align: center;
  padding: 6px 39px;
  margin-top: 10px;
  box-sizing: border-box;
  @media (min-width: 739px) {
    font-size: 16px;
    height: 47px;
  }
`;
