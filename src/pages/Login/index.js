import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { Logo } from "../../components/Shared/Logo";
import { LogoBall } from "../../components/LogoBall";
import { Input, InputPassword } from "../../components/Input";
import { Button } from "../../components/Button";
import DesktopImage from "../../assets/img/login-background-desktop.png";
import LogoEstartando from "../../assets/icons/logo-estartando-devs.svg";
import * as S from "./styles";

const Login = () => {
  const history = useHistory();

  const validationOfForm = Yup.object().shape({
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("Preencha esse campo para continuar"),
    senha: Yup.string()
      .min(6, "A senha deve ter no mínimo 6 digítos")
      .required("Preencha esse campo para continuar"),
  });

  const redirectToHome = () => {
    return history.push("/home");
  };

  return (
    <S.Container>
      <S.ContainerLogin>
        <LogoBall />
        <S.Form>
          <S.ContainerTitle>
            <S.Title>Login</S.Title>
          </S.ContainerTitle>

          <Formik
            initialValues={{
              email: "",
              senha: "",
            }}
            validationSchema={validationOfForm}
          >
            {({ errors }) => {
              return (
                <>
                  <S.Inputs>
                    <Input
                      inputType="email"
                      id="email"
                      htmlFor="email"
                      label="Email"
                      name="email"
                    />

                    <InputPassword
                      id="senha"
                      htmlFor="senha"
                      label="Senha"
                      name="senha"
                    />
                    <S.ForgotPassword error={errors.senha}>
                      Esqueci minha senha
                    </S.ForgotPassword>
                  </S.Inputs>

                  <S.OptionsButtons>
                    <S.ButtonForForm onClick={redirectToHome} width="100%">
                      Entrar
                    </S.ButtonForForm>

                    <S.CreateAccount to="/cadastro">
                      Criar Conta
                    </S.CreateAccount>

                    <Button color="#389674" width="100%">
                      Pesquisar Instituições
                    </Button>
                  </S.OptionsButtons>
                </>
              );
            }}
          </Formik>
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
