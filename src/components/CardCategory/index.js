import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styles";

const CardCategory = ({ imageCategory, nameCategory }) => {
  const history = useHistory();

  const redirectToInstitutions = () => {
    return history.push("/instituicoes");
  };
  return (
    <S.ContainerCard onClick={redirectToInstitutions}>
      <S.ImageCategoryCard src={imageCategory} alt="Foto das categorias" />
      <S.LimitBreak>
        <S.NameCategory>{nameCategory}</S.NameCategory>
      </S.LimitBreak>
    </S.ContainerCard>
  );
};

export { CardCategory };
