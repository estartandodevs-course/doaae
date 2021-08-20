import React from "react";
import { HeaderBar } from "../../components/HeaderBar";
import { CardCategory } from "../../components/CardCategory";
import { dataListCategory } from "../../mock/naveCategories";
import { ButtonMap } from "../../components/ButtonMap";
import Map from "../../assets/img/map-image.png";
import * as S from "./styles";

const Home = () => {
  return (
    <S.ContainerMasterHome>
      <HeaderBar />
      <S.ContainerNavigationMobile>
        <div>
          <h1>Navegue pelo mapa</h1>
          <ButtonMap />
        </div>
      </S.ContainerNavigationMobile>
      <S.ContainerNavigations>
        <S.ContainerNavigationCategory>
          <div>
            <h1>Navegue pelas categorias de doação</h1>
          </div>
          <S.ListCardsByCategory>
            {dataListCategory.map(({ id, photo, name }) => (
              <CardCategory
                key={id}
                imageCategory={photo}
                nameCategory={name}
              />
            ))}
          </S.ListCardsByCategory>
        </S.ContainerNavigationCategory>
        <S.DivisionFromNavigationMap>
          <div>
            <h1>Navegue pelo mapa</h1>
          </div>
          <S.ContainerMapImage>
            <img src={Map} alt="imagem do mapa" />
          </S.ContainerMapImage>
        </S.DivisionFromNavigationMap>
      </S.ContainerNavigations>
    </S.ContainerMasterHome>
  );
};

export default Home;
