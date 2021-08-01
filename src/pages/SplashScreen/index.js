import { Container, HeaderBackground } from "./styles";
import Image from "../../assets/img/people-background.png";
import Logo from "../../assets/img/logo.svg";
import MapPin from "../../assets/img/map-pin.svg";
import Box from "../../assets/img/shipping-box.svg";

const SplashScreen = () => {
  return (
    <Container>
      <HeaderBackground>
        <img src={Image} alt="Pessoas  voluntarias" />
        <img className="logo" src={Logo} alt="Logo doaae" />
      </HeaderBackground>

      <div className="container-info">
        <div className="info">
          <img className="map-icon" src={MapPin} alt="Mapa Icone" />
          <p>
            Encontre o ponto de coleta mais
            <strong> próximo </strong>
            de você.
          </p>
        </div>
        <div className="info">
          <img className="box-icon" src={Box} alt="Box Icone" />
          <p>
            Doar contribui com a transformação para o melhor da sociedade, das
            instituições e, principalmente das pessoas.
          </p>
        </div>
      </div>

      <div className="container-spin">
        <div className="spin">spin</div>
      </div>

      <footer>
        <p>© Estartando Devs - 2021</p>
      </footer>
    </Container>
  );
};

export default SplashScreen;
