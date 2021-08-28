import * as S from "./styles";

import { Input, InputPassword } from "../../Input";
import { Button } from "../../Button";

const FormInstituicao = () => {
  return (
    <S.Form>
      <S.Title>Cadastro</S.Title>
      <Input
        inputType="text"
        id="nome"
        htmlFor="nome"
        label="Nome"
        errorMessage={null}
        key="nome"
      />
      <Input
        inputType="email"
        id="email"
        htmlFor="email"
        label="Email"
        errorMessage={null}
        key="email"
      />
      <Input
        inputType="string"
        id="cnpj"
        htmlFor="cnpj"
        label="CNPJ"
        errorMessage={null}
        key="cnpj"
      />
      <InputPassword
        id="senha"
        htmlFor="senha"
        label="Senha"
        errorMessage={null}
      />
      <InputPassword
        id="confirmar-senha"
        htmlFor="confirmar-senha"
        label="Confirmar senha"
        errorMessage={null}
      />
      <S.ContainerButton>
        <Button to="/home" width="100%">
          Cadastrar
        </Button>
      </S.ContainerButton>
    </S.Form>
  );
};

export { FormInstituicao };
