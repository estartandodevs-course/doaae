import * as S from "./styles";

const Button = ({ children, color, to }) => {
  return (
    <S.ButtonStyled to={to} color={color}>
      {children}
    </S.ButtonStyled>
  );
};

export { Button };
