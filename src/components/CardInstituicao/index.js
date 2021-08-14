import * as S from "./styles";

const CardInstituicao = ({
  avatar,
  name,
  categorias,
  logradouro,
  numero,
  bairro,
  cidade,
}) => {
  return (
    <S.Container>
      <S.ContainerAvatar>
        <S.Avatar
          src={`data:image/png;base64,${avatar}`}
          alt="Ong profile avatar"
        />
      </S.ContainerAvatar>
      <S.ContainerInfo>
        <S.Name>{name}</S.Name>
        <S.CategorysList>
          {categorias.map((categoria) => (
            <S.Categorys>{categoria}</S.Categorys>
          ))}
        </S.CategorysList>
        <S.Location>{`${logradouro}, ${numero}, ${bairro}. ${cidade}`}</S.Location>
      </S.ContainerInfo>
    </S.Container>
  );
};

export { CardInstituicao };
