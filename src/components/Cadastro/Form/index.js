import * as S from "./styles";

import { Input, InputPassword } from "../../Input";
import { Button } from "../../button";

const Form = () => {
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
        inputType="number"
        id="cpf"
        htmlFor="cpf"
        label="CPF"
        errorMessage={null}
        key="cpf"
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
      <Button>Avançar</Button>
    </S.Form>
  );
};

export { Form };
