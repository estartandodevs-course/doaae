import { useHistory } from "react-router-dom";
import * as S from "./styles";
import { Logo } from "../Shared/Logo";
import ArrowBack from "../../assets/icons/arrow-back-icon.svg";

const LogoBall = ({ back }) => {
  const { goBack } = useHistory();
  return (
    <S.LogoBallStyled>
      <S.BallTop />
      {back ? (
        <S.GoBack onClick={goBack}>
          <S.BackIcon src={ArrowBack} />
        </S.GoBack>
      ) : null}
      <S.ContainerLogo>
        <Logo />
      </S.ContainerLogo>
    </S.LogoBallStyled>
  );
};

export { LogoBall };
