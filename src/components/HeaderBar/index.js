import * as S from "./styles";
import ProfileIcon from "../../assets/icons/profile-icon.svg";
import DoorExit from "../../assets/icons/door-exit.svg";

const HeaderBar = ({ profileImage, isLogged }) => {
  if (isLogged) {
    return (
      <S.Container>
        <S.ContainerExit>
          <S.ExitLink to="login">
            <S.Exit src={DoorExit} />
          </S.ExitLink>
          <S.LogoText>DoaAê!</S.LogoText>
        </S.ContainerExit>
        {profileImage !== null ? (
          <S.Profile to="profile">
            <S.ProfileIcon src={profileImage} />
          </S.Profile>
        ) : (
          <S.Profile to="profile">
            <S.ProfileIcon src={ProfileIcon} />
          </S.Profile>
        )}
      </S.Container>
    );
  }
  return (
    <S.Container>
      <S.LogoText>DoaAê!</S.LogoText>
      <S.Login to="/login">Fazer login</S.Login>
    </S.Container>
  );
};

export { HeaderBar };
