import styled from "styled-components";

export const SearchStyled = styled.div`
  width: 315px;
  height: 53px;
  position: relative;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  outline: none;
  border: none;

  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  padding-left: 20px;
  box-sizing: border-box;
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 15px;
  right: 18px;
`;
