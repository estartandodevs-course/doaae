import styled from "styled-components";

// Estilo do componente
const ButtonStyled = styled.button`
  width: 309px;
  height: 48px;
  background-color: ${({ color }) => color || "#007067"};
  color: #fff9f9;
  border-radius: 10px;
  padding: 13px 18.6px 14px 18.6px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.18);
  border: none;
  font-family: "Poppins";
  font-weight: 700;

  &:disabled {
    background-color: #c5c5c5;
  }
`;

export { ButtonStyled };
