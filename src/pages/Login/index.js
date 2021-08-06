import * as S from "./styles";
import { Logo } from "../../components/Shared/Logo";
import { Input, InputPassword } from "../../components/Input";
import { Button } from "../../components/Button";

const Login = () => {
  const error = true;
  return (
    <S.Container>
      <S.Ball />

      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>

      <S.Form>
        <S.TitleContainer>
          <S.Title>Login</S.Title>
        </S.TitleContainer>

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
          <S.ForgotPassword error={error}>Esqueci minha senha</S.ForgotPassword>
        </S.Inputs>

        <S.OptionsButtons>
          <Button>Entrar</Button>

          <S.CreateAccount>Criar Conta</S.CreateAccount>

          <Button color="#389674">Pesquisar Instituições</Button>
        </S.OptionsButtons>
      </S.Form>
    </S.Container>
  );
};

export default Login;
