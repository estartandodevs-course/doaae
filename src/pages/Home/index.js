import React from "react";
import { CardInstituicao } from "../../components/CardInstituicao";
import { instituicoes } from "../../mock/ongs";

const Home = () => {
  return instituicoes.map(({ perfil, nome }) => {
    return (
      <CardInstituicao
        avatar={perfil.avatar.img}
        name={nome}
        categorias={perfil.categorias}
        logradouro={perfil.logradouro}
        numero={perfil.numero}
        cidade={perfil.cidade}
        bairro={perfil.complemento}
      />
    );
  });
};

export default Home;
