import { CheckBoxStyled } from "./styles";

const CheckBox = () => {
  return (
    <CheckBoxStyled>
      <input type="checkbox" id="box" name="box" />
      <label htmlFor="box">Compartilhar meu telefone com a instituição</label>
    </CheckBoxStyled>
  );
};

export { CheckBox };
