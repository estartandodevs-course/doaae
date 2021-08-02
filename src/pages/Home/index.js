import React, { useState } from "react";
import { CardProfile } from "../../components/CardProfile";
import InstituicaoIcon from "../../assets/icons/ong-icon.svg";
import DoadorIcon from "../../assets/icons/doador-icon.svg";
import DoadorBadge from "../../assets/icons/doador-badge.svg";
import InstituicaoBadge from "../../assets/icons/instituicao-badge.svg";

const Home = () => {
  const [selectDoador, setSelectDoador] = useState(false);

  const [selectInstituicao, setSelectInstituicao] = useState(false);

  const handleSelectDoador = () => {
    return selectDoador ? setSelectDoador(false) : setSelectDoador(true);
  };

  const handleSelectInstituicao = () => {
    return selectInstituicao
      ? setSelectInstituicao(false)
      : setSelectInstituicao(true);
  };

  return (
    <div className="container-card">
      <CardProfile
        onClick={handleSelectDoador}
        cardName="Doador"
        backgroundColor="#388596"
        descriptions={[
          "Deseja doar algo",
          "Busca por instituições para fazer a doação",
        ]}
        img={DoadorIcon}
        margin={25}
        badge={DoadorBadge}
        select={selectDoador}
      />

      <CardProfile
        onClick={handleSelectInstituicao}
        cardName="Instituição"
        backgroundColor="#389674"
        descriptions={[
          "Recebe doações",
          "Gerencia ações",
          "Faz agendamentos para receber as doações",
        ]}
        img={InstituicaoIcon}
        margin={44}
        badge={InstituicaoBadge}
        select={selectInstituicao}
      />
    </div>
  );
};

export default Home;
