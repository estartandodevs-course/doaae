import React, { useContext, useEffect } from "react";
import { CardInstituicao } from "../../components/CardInstituicao";
import { InstituicaoContext } from "../../contexts";

const Home = () => {
  const { instituicoes, getAll } = useContext(InstituicaoContext);

  useEffect(() => {
    if (!instituicoes.length) {
      getAll();
    }
  }, []);

  return instituicoes.map(({ logo, nome, semana, endereco, categorias }) => {
    return (
      <CardInstituicao
        avatar={logo}
        nome={nome}
        categorias={categorias}
        logradouro={endereco.logradouro}
        numero={endereco.numero}
        cidade={endereco.cidade}
        bairro={endereco.complemento}
        diasDaSemana={semana}
      />
    );
  });
};

export default Home;
