/* eslint-disable */
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { HeaderBar } from "../../components/HeaderBar";
import { CardInstituicao } from "../../components/CardInstituicao";
import { InstituicaoContext } from "../../contexts/index";
import * as S from "./styles";

const Instituitions = () => {
  const { instituicoes, getAll } = useContext(InstituicaoContext);

  const history = useHistory();

  const redirectToDataInstitution = (id) => {
    return history.push(`/instituicoes/${id}`);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <S.ContainerMaster>
      <HeaderBar>Instituições</HeaderBar>
      <S.ContainerCardsInstituitions>
        {instituicoes.map(
          ({ id, nome, logo, verificada, semana, categorias, endereco }) => {
            return (
              <CardInstituicao
                onClick={() => redirectToDataInstitution(id)}
                key={id}
                avatar={logo}
                nome={nome}
                categorias={categorias}
                logradouro={endereco.logradouro}
                numero={endereco.numero}
                bairro={endereco.complemento}
                cidade={endereco.cidade}
                diasDaSemana={semana}
                verificada={verificada}
              />
            );
          }
        )}
      </S.ContainerCardsInstituitions>
    </S.ContainerMaster>
  );
};

export default Instituitions;
