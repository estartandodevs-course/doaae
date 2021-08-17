import styled from "styled-components";

export const CheckBoxStyled = styled.div`
  display: flex;
  label {
    font-family: Poppins;
    font-size: 18px;
    line-height: 27px;
    width: 278px;
    color: #393939;
    font-weight: 300;
    margin-left: 8px;
  }
`;

export const Input = styled.input`
  /* position: relative; */
  position: relative;
  appearance: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  border: 2px solid #389674;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  &:checked {
    &::before {
      content: "";
      position: absolute;
      transition: all 0.1s;
      border-radius: 1px;
      width: 22px;
      height: 22px;
      background: #389674;
      border-radius: 4px;
      top: -1px;
      left: -1px;
    }
  }
`;
