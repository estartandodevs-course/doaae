import * as S from "./styles";
import { Logo } from "../../components/Shared/Logo";
import { LogoBall } from "../../components/LogoBall";
import { Input, InputPassword } from "../../components/Input";
import { Button } from "../../components/Button";
import DesktopImage from "../../assets/img/login-background-desktop.png";
import LogoEstartando from "../../assets/icons/logo-estartando-devs.svg";

const Login = () => {
  const error = true;
  return (
    <S.Container>
      <S.ContainerLogin>
        <LogoBall />
        <S.Form>
          <S.ContainerTitle>
            <S.Title>Login</S.Title>
          </S.ContainerTitle>

          <S.Inputs>
            <Input
              inputType="email"
              id="email"
              htmlFor="email"
              label="Email"
              errorMessage={null}
            />
            <InputPassword
              id="senha"
              htmlFor="senha"
              label="Senha"
              errorMessage={null}
            />
            <S.ForgotPassword error={error}>
              Esqueci minha senha
            </S.ForgotPassword>
          </S.Inputs>

          <S.OptionsButtons>
            <Button to="/home">Entrar</Button>

            <S.CreateAccount to="/cadastro">Criar Conta</S.CreateAccount>

            <Button color="#389674">Pesquisar Instituições</Button>
          </S.OptionsButtons>
        </S.Form>
      </S.ContainerLogin>

      <S.ContainerImage>
        <S.Image src={DesktopImage} />
        <S.ContainerLogoBottom>
          <Logo />
          <S.ContainerLogoEstartando>
            <S.LogoEstartando src={LogoEstartando} />
            <S.EstartandoText>Estartando Devs 2021</S.EstartandoText>
          </S.ContainerLogoEstartando>
        </S.ContainerLogoBottom>

        <S.BallBottom />
      </S.ContainerImage>
    </S.Container>
  );
};

export default Login;
