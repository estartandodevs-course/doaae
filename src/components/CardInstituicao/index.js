import * as S from "./styles";

const CardInstituicao = ({
  avatar,
  nome,
  categorias,
  logradouro,
  numero,
  bairro,
  cidade,
  diasDaSemana,
}) => {
  return (
    <S.Container>
      <S.ContainerAvatar>
        <S.Avatar src={avatar} alt="Ong profile avatar" />
      </S.ContainerAvatar>
      <S.ContainerInfo>
        <S.Name>{nome}</S.Name>
        <S.CategorysList>
          {categorias.map((categoria) => (
            <S.Categorys>{categoria}</S.Categorys>
          ))}
        </S.CategorysList>
        <S.Location>{`${logradouro}, ${numero}, ${bairro}. ${cidade}`}</S.Location>
        <S.ContainerDays>
          <S.Semana>{diasDaSemana}</S.Semana>
        </S.ContainerDays>
      </S.ContainerInfo>
    </S.Container>
  );
};

export { CardInstituicao };
