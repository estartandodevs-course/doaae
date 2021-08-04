import { useState } from "react";
import * as S from "./styles";
import { ContainerNavbar } from "../../components/ContainerNavbar";
import { CardProfile } from "../../components/CardProfile";
import { Input, InputPassword } from "../../components/Input";
import { Button } from "../../components/Button";
import DoadorImg from "../../assets/icons/doador-img.svg";
import InstituicaoImg from "../../assets/icons/instituicao-img.svg";
import DoadorBadge from "../../assets/icons/doador-badge.svg";
import InstituicaoBadge from "../../assets/icons/instituicao-badge.svg";

const Cadastro = () => {
  const [doadorSelect, setDoadorSelect] = useState(false);
  const [instituicaoSelect, setInstituicaoSelect] = useState(false);
  const [small, setSmall] = useState(false);

  const handleDoadorSelect = () => {
    if (doadorSelect) {
      setSmall(false);
      return setDoadorSelect(false);
    }
    setSmall(true);
    return setDoadorSelect(true);
  };

  const handleInstituicaoSelect = () => {
    if (instituicaoSelect) {
      setSmall(false);
      return setInstituicaoSelect(false);
    }
    setSmall(true);
    return setInstituicaoSelect(true);
  };

  const Text = () => {
    if (small) {
      return (
        <S.Text small={small}>
          Vamos precisar de alguns dados seu para concluir seu cadastro.
        </S.Text>
      );
    }
    return <S.Text>De que forma você irá utilizar este aplicativo?</S.Text>;
  };

  return (
    <S.Container>
      <ContainerNavbar>Cadastro</ContainerNavbar>
      {Text()}
      <S.Profiles>
        <CardProfile
          onClick={handleDoadorSelect}
          cardName="Doador"
          img={DoadorImg}
          backgroundColor="#388596"
          descriptions="<li>Deseja doar algo</li>
          <li>Busca por instituições para fazer a doação</li>"
          badge={DoadorBadge}
          select={doadorSelect}
          small={small}
        />
        <CardProfile
          onClick={handleInstituicaoSelect}
          cardName="Instituição"
          img={InstituicaoImg}
          backgroundColor="#389674"
          descriptions="<li>Recebe doações</li>
          <li>Gerencia ações</li>
          <li>Faz agendamentos para receber as doações</li>"
          badge={InstituicaoBadge}
          select={instituicaoSelect}
          small={small}
        />
      </S.Profiles>
      {small && (
        <S.Form>
          <S.Title>Cadastro</S.Title>
          <Input
            inputType="text"
            id="nome"
            htmlFor="nome"
            label="Nome"
            errorMessage={null}
            key="nome"
          />
          <Input
            inputType="email"
            id="email"
            htmlFor="email"
            label="Email"
            errorMessage={null}
            key="email"
          />
          <Input
            inputType="number"
            id="cpf"
            htmlFor="cpf"
            label="CPF"
            errorMessage={null}
            key="cpf"
          />
          <InputPassword
            id="senha"
            htmlFor="senha"
            label="Senha"
            errorMessage={null}
          />
          <InputPassword
            id="confirmar-senha"
            htmlFor="confirmar-senha"
            label="Confirmar senha"
            errorMessage={null}
          />
          <Button>Avançar</Button>
        </S.Form>
      )}
    </S.Container>
  );
};

export default Cadastro;
