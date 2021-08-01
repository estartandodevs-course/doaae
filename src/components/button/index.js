import React from "react";
import { Button } from "./styles";

const Buttons = ({ children, color }) => {
  return <Button color={color}>{children}</Button>;
};

export { Buttons };
