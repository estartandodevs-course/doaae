import * as S from "./styles";
import { Logo } from "../Shared/Logo";
import ArrowBack from "../../assets/icons/arrow-back-icon.svg";

const LogoBall = ({ backTo }) => {
  return (
    <S.LogoBallStyled>
      <S.BallTop />
      {backTo ? (
        <S.GoBack to={backTo}>
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
