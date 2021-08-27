import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import ProfileIcon from "../../assets/icons/profile-icon.svg";
import DoorExit from "../../assets/icons/door-exit.svg";
import BackIcon from "../../assets/icons/back-icon.svg";
import { SearchInput } from "../SearchInput";
import { UserContext } from "../../contexts/userContext";

const HeaderBar = ({ home, children, edit, backTo = "/home", searchInput }) => {
  const { user, getUserOfApi } = useContext(UserContext);
  const history = useHistory();

  const redirectTo = () => {
    return history.push(backTo);
  };

  useEffect(() => {
    getUserOfApi();
  }, []);

  if (user) {
    return (
      <>
        <S.Container>
          <S.ContainerExit>
            {home ? (
              <>
                <S.ExitLink to="login">
                  <S.Exit src={DoorExit} />
                </S.ExitLink>
                <S.LogoText>{children}</S.LogoText>
                {searchInput && (
                  <S.InputDesktop>
                    <SearchInput />
                  </S.InputDesktop>
                )}
              </>
            ) : (
              <>
                <S.BackLink onClick={redirectTo}>
                  <S.Back src={BackIcon} />
                </S.BackLink>
                <S.LogoText>{children}</S.LogoText>
                {searchInput && (
                  <S.InputDesktop>
                    <SearchInput />
                  </S.InputDesktop>
                )}
              </>
            )}
          </S.ContainerExit>
          <>
            {!edit && (
              <>
                {user.imagemPerfil ? (
                  <S.Profile to="editarperfil">
                    <S.ProfileIcon src={user.imagemPerfil} />
                  </S.Profile>
                ) : (
                  <S.Profile to="editarperfil">
                    <S.ProfileIcon src={ProfileIcon} />
                  </S.Profile>
                )}
              </>
            )}
          </>
        </S.Container>
        <>
          {searchInput && (
            <S.PositionInputMobile>
              <SearchInput />
            </S.PositionInputMobile>
          )}
        </>
      </>
    );
  }
  return (
    <>
      <S.Container>
        <S.ContainerExit>
          {!home && (
            <S.BackLink onClick={redirectTo}>
              <S.Back src={BackIcon} />
            </S.BackLink>
          )}
          <S.LogoText>{children}</S.LogoText>
          {searchInput && (
            <S.InputDesktop>
              <SearchInput />
            </S.InputDesktop>
          )}
        </S.ContainerExit>

        <S.Login to="/login">Fazer login</S.Login>
      </S.Container>
      <>
        {searchInput && (
          <S.PositionInputMobile>
            <SearchInput />
          </S.PositionInputMobile>
        )}
      </>
    </>
  );
};

export { HeaderBar };
