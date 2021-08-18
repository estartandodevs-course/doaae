import * as S from "./styles";

const DescriptionDesktop = ({ small, selected }) => {
  if (small) {
    return (
      <>
        <S.DescriptionTitle color="#388596">
          {`Cadastro de ${selected}`}
        </S.DescriptionTitle>
        <S.Text margin="36px">
          Vamos precisar de alguns dados seu para concluir seu cadastro.
        </S.Text>
      </>
    );
  }
  return (
    <>
      <S.DescriptionTitle color="#000">Tipo de perfil</S.DescriptionTitle>
      <S.DescriptionText>
        <S.Text>De que forma você irá utilizar este aplicativo?</S.Text>
        <S.Text>Escolha a opção que mais se adequa ao seu perfil.</S.Text>
      </S.DescriptionText>
    </>
  );
};

export { DescriptionDesktop };
