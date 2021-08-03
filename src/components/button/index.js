import React from "react";
import { ButtonStyled } from "./styles";

const Button = ({ children, color }) => {
  return <ButtonStyled color={color}>{children}</ButtonStyled>;
};

export { Button };
