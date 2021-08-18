import { useReducer } from "react";
import * as S from "./styles";
import { ContainerNavbar } from "../../components/ContainerNavbar";
import { CardProfile } from "../../components/CardProfile";
import { Form } from "../../components/Cadastro/Form";
import { Description } from "../../components/Cadastro/Description";
import { DescriptionDesktop } from "../../components/Cadastro/DescriptionDesktop";
import { LogoBall } from "../../components/LogoBall";
import { Button } from "../../components/Button";
import DoadorImg from "../../assets/icons/doador-img.svg";
import InstituicaoImg from "../../assets/icons/instituicao-img.svg";
import DoadorBadge from "../../assets/icons/doador-badge.svg";
import InstituicaoBadge from "../../assets/icons/instituicao-badge.svg";

const Cadastro = () => {
  // TODO: Fazer em outro local o handlePerfil
  const handlePerfil = (stateAction, action) => {
    switch (action.type) {
      case "Doador": {
        const shouldClose = stateAction.selected !== "Doador";
        return { selected: shouldClose ? "Doador" : " ", close: shouldClose };
      }
      case "Instituição": {
        const shouldClose = stateAction.selected !== "Instituição";
        return {
          selected: shouldClose ? "Instituição" : " ",
          close: shouldClose,
        };
      }
      default:
        throw Error();
    }
  };

  const [state, dispatch] = useReducer(handlePerfil, {
    selected: " ",
    close: false,
  });

  return (
    <S.Container>
      <S.NavBarContainer>
        <ContainerNavbar>Cadastro</ContainerNavbar>
      </S.NavBarContainer>
      <S.ContainerLeft>
        <LogoBall back />
        <S.ContainerDescription>
          <DescriptionDesktop small={state.close} selected={state.selected} />
          <Button width="263px" to="/login">
            Voltar
          </Button>
        </S.ContainerDescription>
      </S.ContainerLeft>
      <S.ContainerForm>
        <S.ContainerDescriptionMobile>
          <Description small={state.close} />
        </S.ContainerDescriptionMobile>
        <S.Profiles>
          <CardProfile
            onClick={() => dispatch({ type: "Doador" })}
            cardName="Doador"
            img={DoadorImg}
            backgroundColor="#388596"
            descriptions="<li>Deseja doar algo</li>
          <li>Busca por instituições para fazer a doação</li>"
            badge={DoadorBadge}
            select={state.selected === "Doador"}
            small={state.close}
          />
          <CardProfile
            onClick={() => dispatch({ type: "Instituição" })}
            cardName="Instituição"
            img={InstituicaoImg}
            backgroundColor="#389674"
            descriptions="<li>Recebe doações</li>
          <li>Gerencia ações</li>
          <li>Faz agendamentos para receber as doações</li>"
            badge={InstituicaoBadge}
            select={state.selected === "Instituição"}
            small={state.close}
          />
        </S.Profiles>
        {state.close && <Form />}
      </S.ContainerForm>
    </S.Container>
  );
};

export default Cadastro;
