import * as S from "./styles";

import { Logo } from "../Shared/Logo";

const LogoBall = () => {
  return (
    <S.LogoBallStyled>
      <S.BallTop />

      <S.ContainerLogo>
        <Logo />
      </S.ContainerLogo>
    </S.LogoBallStyled>
  );
};

export { LogoBall };
