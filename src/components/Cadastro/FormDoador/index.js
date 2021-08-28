import { Formik } from "formik";
import * as Yup from "yup";
import * as S from "./styles";
import { Input, InputPassword } from "../../Input";
import { Button } from "../../Button";

const FormDoador = () => {
  const validationOfForm = Yup.object().shape({
    nome: Yup.string().required("Preencha esse campo para continuar"),
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("Preencha esse campo para continuar"),
    cpf: Yup.string().required("Preencha esse campo para continuar"),
    senha: Yup.string()
      .min(6, "A senha precisa no mínimo 6 dígitos")
      .required("Preencha esse campo para continuar"),
    confirmarSenha: Yup.string()
      .oneOf([Yup.ref("senha"), null], "As senhas precisam ser iguais")
      .required("Preencha esse campo para continuar"),
  });
  return (
    <Formik
      initialValues={{
        nome: "",
        email: "",
        cpf: "",
        senha: "",
        confirmarSenha: "",
      }}
      validationSchema={validationOfForm}
    >
      {({ errors, touched }) => {
        return (
          <S.Form>
            <S.Title>Cadastro</S.Title>
            <Input
              type="text"
              id="nome"
              htmlFor="nome"
              label="Nome"
              key="nome"
              name="nome"
              error={errors.nome && touched.nome}
            />
            <Input
              type="email"
              id="email"
              htmlFor="email"
              label="E-mail"
              key="email"
              name="email"
              error={errors.email && touched.email}
            />
            <Input
              type="string"
              id="cpf"
              htmlFor="cpf"
              label="CPF"
              key="cpf"
              name="cpf"
              error={errors.cpf && touched.cpf}
            />
            <InputPassword
              id="senha"
              htmlFor="senha"
              label="Senha"
              name="senha"
              error={errors.senha && touched.senha}
            />
            <InputPassword
              id="confirmaSenha"
              htmlFor="confirmaSenha"
              label="Confirmar senha"
              key="confirmarSenha"
              name="confirmarSenha"
              error={errors.confirmarSenha && touched.confirmarSenha}
            />
            <S.ContainerButton>
              <Button to="/home" width="100%">
                Cadastrar
              </Button>
            </S.ContainerButton>
          </S.Form>
        );
      }}
    </Formik>
  );
};

export { FormDoador };
