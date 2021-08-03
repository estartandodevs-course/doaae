import { Container, HeaderBackground } from "./styles";
import Image from "../../assets/img/people-background.png";
import Logo from "../../assets/icons/logo.svg";
import MapPin from "../../assets/icons/map-pin.svg";
import Box from "../../assets/icons/shipping-box.svg";
import { LoadingSpin } from "../../components/Shared/LoadingSpin";
import { Info } from "../../components/SplashScreen/Info";

const SplashScreen = () => {
  return (
    <Container>
      <HeaderBackground>
        <img src={Image} alt="Pessoas  voluntarias" />
        <img className="logo" src={Logo} alt="Logo doaae" />
      </HeaderBackground>

      <div className="container-info">
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
      </div>

      <LoadingSpin />

      <footer className="footer">
        <p>© Estartando Devs - 2021</p>
      </footer>
    </Container>
  );
};

export default SplashScreen;
