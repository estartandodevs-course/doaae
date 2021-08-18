import * as S from "./styles";
import Image from "../../assets/img/people-background.png";
import Logo from "../../assets/icons/logo.svg";
import MapPin from "../../assets/icons/map-pin.svg";
import Box from "../../assets/icons/shipping-box.svg";
import { LoadingSpin } from "../../components/Shared/LoadingSpin";
import { Info } from "../../components/SplashScreen/Info";

const SplashScreen = () => {
  return (
    <S.Container>
      <S.ContainerMobile>
        <S.HeaderBackground>
          <S.Background src={Image} alt="Pessoas  voluntarias" />
          <S.Logo className="logo" src={Logo} alt="Logo doaae" />
        </S.HeaderBackground>

        <S.ContainerInfo>
          <Info
            image={MapPin}
            text="<p>
          Encontre o ponto de coleta mais
          <strong> próximo </strong>
          de você.
        </p>"
          />
          <Info
            image={Box}
            text="<p>
          Doar contribui com a <strong>transformação</strong> para o melhor da <strong>sociedade</strong>, das <strong>instituições</strong> e, principalmente das <strong>pessoas</strong>.
        </p>"
          />
        </S.ContainerInfo>

        <LoadingSpin />

        <S.Footer className="footer">
          <p>© Estartando Devs - 2021</p>
        </S.Footer>
      </S.ContainerMobile>
      <S.ContainerDesktop>
        <LoadingSpin />
      </S.ContainerDesktop>
    </S.Container>
  );
};

export default SplashScreen;
