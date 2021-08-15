import * as S from "./styles";

const CheckBox = () => {
  return (
    <S.CheckBoxStyled>
      <S.Input type="checkbox" />

      <label htmlFor="box">Compartilhar meu telefone com a instituição</label>
    </S.CheckBoxStyled>
  );
};

export { CheckBox };
