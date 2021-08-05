import * as S from "./styles";

const Description = ({ small }) => {
  if (small) {
    return (
      <S.Text small={small}>
        Vamos precisar de alguns dados seu para concluir seu cadastro.
      </S.Text>
    );
  }
  return <S.Text>De que forma você irá utilizar este aplicativo?</S.Text>;
};

export { Description };
