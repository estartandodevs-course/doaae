import React from "react";
import { HeaderBar } from "../../components/HeaderBar";
import * as S from "./styles";

const InstitutionalData = () => {
  return (
    <section>
      <S.ContainerFromHeader>
        <HeaderBar isLogged />
      </S.ContainerFromHeader>
      <S.ImagefromInstitutional>
        <div />
      </S.ImagefromInstitutional>
      <S.ContainerInstitutionData>
        <S.InformationFromInstitution>
          <S.NameAndEvaluatioInstitution>
            <S.NameInstitution>ONG Mais</S.NameInstitution>
            <S.EvaluationInstitution>4.8</S.EvaluationInstitution>
          </S.NameAndEvaluatioInstitution>
          <S.ContainerCategoriesOfInstitutions>
            <S.CategoryItems>Alimento - Roupas - Dinheiro</S.CategoryItems>
          </S.ContainerCategoriesOfInstitutions>
        </S.InformationFromInstitution>
      </S.ContainerInstitutionData>
    </section>
  );
};

export default InstitutionalData;
