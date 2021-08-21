import MapIcon from "../../assets/icons/map-icon.svg";
import NextLink from "../../assets/icons/next-link.svg";
import * as S from "./styles";

const ButtonMap = ({ onClick }) => {
  return (
    <S.Container onClick={onClick}>
      <S.MapIcon src={MapIcon} />
      <S.ContainerText to="mapa">
        <S.Text>Buscar por instituições próximas pelo mapa</S.Text>
        <S.NextIcon src={NextLink} />
      </S.ContainerText>
    </S.Container>
  );
};

export { ButtonMap };
