import * as S from "./styles";
import MapIcon from "../../assets/icons/map-icon.svg";
import NextLink from "../../assets/icons/next-link.svg";

const ButtonMap = () => {
  return (
    <S.Container>
      <S.MapIcon src={MapIcon} />
      <S.ContainerText to="mapa">
        <S.Text>Buscar por instituições próximas pelo mapa</S.Text>
        <S.NextIcon src={NextLink} />
      </S.ContainerText>
    </S.Container>
  );
};

export { ButtonMap };
