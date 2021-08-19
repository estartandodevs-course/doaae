import React from "react";
import { HeaderBar } from "../../components/HeaderBar";
import { CardCategory } from "../../components/CardCategory";
import { dataListCategory } from "../../mock/naveCategories";
import * as S from "./styles";

const Home = () => {
  return (
    <S.ContainerMasterHome>
      <HeaderBar />
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
        <section>sdad</section>
      </S.ContainerNavigations>
    </S.ContainerMasterHome>
  );
};

export default Home;
