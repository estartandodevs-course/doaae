import { Formik } from "formik";
import * as Yup from "yup";
import * as S from "./styles";
import { Input, InputPassword } from "../../Input";
import { ButtonForForm } from "../../../pages/Login/styles";

const FormInstituicao = () => {
  const validationOfForm = Yup.object().shape({
    nome: Yup.string().required("Preencha esse campo para continuar"),
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("Preencha esse campo para continuar"),
    cnpj: Yup.string().required("Preencha esse campo para continuar"),
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
        cnpj: "",
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
              id="cnpj"
              htmlFor="cnpj"
              label="CNPJ"
              key="cnpj"
              name="cnpj"
              error={errors.cnpj && touched.cnpj}
            />
            <InputPassword
              id="senha"
              htmlFor="senha"
              label="Senha"
              name="senha"
              error={errors.senha && touched.senha}
            />
            <InputPassword
              id="confirmarSenha"
              htmlFor="confirmarSenha"
              label="Confirmar senha"
              name="confirmarSenha"
              error={errors.confirmarSenha && touched.confirmarSenha}
            />
            <S.ContainerButton>
              <ButtonForForm width="100%" disabled>
                Cadastrar
              </ButtonForForm>
            </S.ContainerButton>
          </S.Form>
        );
      }}
    </Formik>
  );
};

export { FormInstituicao };
