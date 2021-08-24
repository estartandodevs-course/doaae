import * as S from "./styles";
import { LogoBall } from "../../components/LogoBall";
import Box from "../../assets/img/box-doacao-agendada.png";
import { Button } from "../../components/Button";
import { HeaderBar } from "../../components/HeaderBar";

const PageScheduleDonation = () => {
  return (
    <S.Container>
      <S.ContainerHeader>
        <HeaderBar isLogged>Doação agendada</HeaderBar>
      </S.ContainerHeader>
      <S.ContainerInfo>
        <LogoBall backTo="/home" />
        <S.ContainerText>
          <h1>Doação agendada!</h1>
          <p>
            Iremos te notificar sobre as atualizações por pate da instituição
          </p>
        </S.ContainerText>
      </S.ContainerInfo>
      <S.ContainerDoacaoAgendada>
        <S.WrapperContent>
          <h1>Doação Agendada!</h1>
          <img src={Box} alt="Caixa de doação agendada" />
          <p>
            Iremos te notificar sobre as atualizações por pate da instituição
          </p>
          <Button to="/home" color="#389674;">
            Voltar ao início
          </Button>
        </S.WrapperContent>
      </S.ContainerDoacaoAgendada>
    </S.Container>
  );
};

export default PageScheduleDonation;
