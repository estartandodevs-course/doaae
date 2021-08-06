import * as S from "./styled";

const Info = ({ image, text }) => {
  return (
    <S.InfoStyled>
      <S.Icon className="map-icon" src={image} alt="Mapa Icone" />
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </S.InfoStyled>
  );
};

export { Info };
