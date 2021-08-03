import { useHistory } from "react-router-dom";
import { NavBar, ArrowBack } from "./styles";
import BackIcon from "../../assets/icons/back-icon.svg";

const ContainerNavbar = ({ children }) => {
  const { goBack } = useHistory();
  return (
    <NavBar>
      <ArrowBack onClick={goBack}>
        <img src={BackIcon} alt="Icone voltar" />
      </ArrowBack>
      <span className="title-page">{children}</span>
    </NavBar>
  );
};

export { ContainerNavbar };
