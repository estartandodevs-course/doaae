import * as S from "./styles";
import CalendarioIcon from "../../assets/icons/calendario-icon.svg";
import Badge from "../../assets/icons/badge-card-icon.svg";

const CardInstituicao = ({
  avatar,
  nome,
  categorias,
  logradouro,
  numero,
  bairro,
  cidade,
  diasDaSemana,
  verificada,
  onClick,
}) => {
  return (
    <S.Container onClick={onClick}>
      {verificada && <S.Verificado src={Badge} />}
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
          <S.CalendarioIcon src={CalendarioIcon} />
          <S.Semana>{diasDaSemana}</S.Semana>
        </S.ContainerDays>
      </S.ContainerInfo>
    </S.Container>
  );
};

export { CardInstituicao };
