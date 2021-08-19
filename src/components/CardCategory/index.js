import React from "react";
import * as S from "./styles";

const CardCategory = ({ imageCategory, nameCategory }) => {
  return (
    <S.ContainerCard>
      <S.ImageCategoryCard src={imageCategory} alt="Foto das categorias" />
      <S.LimitBreak>
        <S.NameCategory>{nameCategory}</S.NameCategory>
      </S.LimitBreak>
    </S.ContainerCard>
  );
};

export { CardCategory };
