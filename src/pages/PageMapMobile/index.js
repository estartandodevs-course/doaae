import React from "react";
import { HeaderBar } from "../../components/HeaderBar";
import Map from "../../assets/img/map-image.png";
import * as S from "./styles";

const PageMapMobile = () => {
  return (
    <section>
      <S.ContainerHeader>
        <HeaderBar isLogged>Mapa</HeaderBar>
      </S.ContainerHeader>
      <S.ImageMap src={Map} alt="imagem do mapa" />
    </section>
  );
};

export default PageMapMobile;
