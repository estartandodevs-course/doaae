/* eslint-disable */
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { HeaderBar } from "../../components/HeaderBar";
import { CardInstituicao } from "../../components/CardInstituicao";
import { InstituicaoContext } from "../../contexts/instContext";
import { UserContext } from "../../contexts/userContext";
import * as S from "./styles";

const Instituitions = () => {
  const { instituicoes, getAll } = useContext(InstituicaoContext);
  const { user, getUserOfApi } = useContext(UserContext);
  console.log(user);

  const history = useHistory();

  const redirectToDataInstitution = (id) => {
    return history.push(`/instituicoes/${id}`);
  };

  useEffect(() => {
    getAll();
    getUserOfApi();
  }, []);

  return (
    <S.ContainerMaster>
      <S.ContainerHeader>
        <HeaderBar backTo="/home" searchInput>
          Instituições
        </HeaderBar>
      </S.ContainerHeader>
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
