import { useHistory } from "react-router-dom";
import * as S from "./styles";
import ProfileIcon from "../../assets/icons/profile-icon.svg";
import DoorExit from "../../assets/icons/door-exit.svg";
import BackIcon from "../../assets/icons/back-icon.svg";
import { SearchInput } from "../SearchInput";

const HeaderBar = ({ home, profileImage = null, isLogged, children, edit }) => {
  const { goBack } = useHistory();

  if (isLogged) {
    return (
      <S.Container>
        <S.ContainerExit>
          {home ? (
            <S.ExitLink to="login">
              <S.Exit src={DoorExit} />
            </S.ExitLink>
          ) : (
            <S.BackLink onClick={goBack}>
              <S.Back src={BackIcon} />
            </S.BackLink>
          )}
          <S.LogoText>{children}</S.LogoText>
        </S.ContainerExit>
        <>
          {edit ? (
            <></>
          ) : (
            <>
              {profileImage ? (
                <S.Profile to="profile">
                  <S.ProfileIcon src={profileImage} />
                </S.Profile>
              ) : (
                <S.Profile to="profile">
                  <S.ProfileIcon src={ProfileIcon} />
                </S.Profile>
              )}
            </>
          )}
        </>
      </S.Container>
    );
  }
  return (
    <>
      <S.Container>
        <S.ContainerExit>
          {!home && (
            <S.BackLink onClick={goBack}>
              <S.Back src={BackIcon} />
            </S.BackLink>
          )}
          <S.LogoText>{children}</S.LogoText>
          <SearchInput />
        </S.ContainerExit>

        <S.Login to="/login">Fazer login</S.Login>
      </S.Container>
      <S.PositionInputMobile>
        <SearchInput />
      </S.PositionInputMobile>
    </>
  );
};

export { HeaderBar };
