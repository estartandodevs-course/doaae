import { useHistory } from "react-router-dom";
import * as S from "./styles";

const CardToShedule = () => {
  const history = useHistory();
  const redirectToPageScheduleDonation = () => {
    return history.push("/agendardoacao");
  };

  return (
    <S.Container>
      <S.Title>Agende sua doação</S.Title>
      <S.ContainerText>
        <S.Text>
          Entre em contato com a instituição pelo aplicativo e veja quando
          entregar sua doação!
        </S.Text>
        <S.Button onClick={redirectToPageScheduleDonation}>
          Agendar minha doação
        </S.Button>
      </S.ContainerText>
    </S.Container>
  );
};

export { CardToShedule };
