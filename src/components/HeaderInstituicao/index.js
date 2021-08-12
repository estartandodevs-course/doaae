import * as S from "./styles";
import Star from "../../assets/icons/star.svg";

const HeaderInstituicao = ({
  cape,
  logo,
  instName,
  description,
  nota,
  categorys,
  location,
}) => {
  return (
    <S.Container>
      <S.Cape src={cape} />
      <S.ContainerInfo>
        <S.Logo src={logo} />
        <S.Info>
          <S.Name>{instName}</S.Name>
          <S.CategoryList>
            {categorys.map((category) => (
              <S.Category>{category}</S.Category>
            ))}
          </S.CategoryList>
        </S.Info>
        <S.ContainerNota>
          <S.Nota>{nota}</S.Nota>
          <S.Star src={Star} />
        </S.ContainerNota>
      </S.ContainerInfo>

      <S.ContainerLocation>
        <S.Endereco>Endereço</S.Endereco>
        <S.Location>{location}</S.Location>
      </S.ContainerLocation>

      <S.ContainerAbout>
        <S.About>{`Sobre a ${instName}`}</S.About>
        <S.Text>{description}</S.Text>
      </S.ContainerAbout>
    </S.Container>
  );
};

export { HeaderInstituicao };
