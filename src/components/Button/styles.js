import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width || "308px"};
  height: ${({ height }) => height || "48px"};
  background-color: ${({ color }) => color || "#007067"};
  border-radius: 10px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.18);
  border: none;

  font-family: "Poppins";
  color: #fff9f9;
  font-weight: 700;
  text-decoration: none;
  &:disabled {
    background-color: #c5c5c5;
  }
`;
