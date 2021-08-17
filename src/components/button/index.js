import * as S from "./styles";

const Button = ({ children, color, to, width, height }) => {
  return (
    <S.ButtonStyled to={to} color={color} width={width} height={height}>
      {children}
    </S.ButtonStyled>
  );
};

export { Button };
