import { Formik } from "formik";
import * as Yup from "yup";
import * as S from "./styles";
import { LogoBall } from "../../components/LogoBall";
import { InputUploadImage } from "../../components/InputUploadImage";
import { Input, InputPassword } from "../../components/Input";
import { Button } from "../../components/Button";
import { HeaderBar } from "../../components/HeaderBar";

const EditarPerfil = () => {
  const validationOfForm = Yup.object().shape({
    editarNome: Yup.string().required("Preencha esse campo para continuar"),
    editarEmail: Yup.string()
      .email("Digite um e-mail válido")
      .required("Preencha esse campo para continuar"),
    editarCpf: Yup.string().required("Preencha esse campo para continuar"),
    senhaAntiga: Yup.string()
      .min(6, "A senha precisa no mínimo 6 dígitos")
      .required("Preencha esse campo para continuar"),
    senhaNova: Yup.string()
      .min(6, "A senha precisa no mínimo 6 dígitos")
      .required("Preencha esse campo para continuar"),
    editaConfirmarSenhaNova: Yup.string()
      .min(6, "A senha precisa no mínimo 6 dígitos")
      .required("Preencha esse campo para continuar"),
  });
  return (
    <S.ContainerEditarPerfil>
      <S.ContainerHeader>
        <HeaderBar edit>Editar Perfil</HeaderBar>
      </S.ContainerHeader>
      <S.ContainerInfo>
        <LogoBall backTo="/home" />
        <S.ContainerText>
          <h1>Edição de perfil</h1>
          <p>Altere seus dados ou adicione uma foto ao seu perfil!</p>
        </S.ContainerText>
      </S.ContainerInfo>
      <S.ContainerForm>
        <S.Text>Altere seus dados ou adicione uma foto ao seu perfil!</S.Text>
        <Formik
          initialValues={{
            editarNome: "",
            editarEmail: "",
            editarCpf: "",
            senhaAntiga: "",
            senhaNova: "",
            ConfirmarSenhaNova: "",
          }}
          validationSchema={validationOfForm}
        >
          <S.Form>
            <S.ContainerUploadImage>
              <InputUploadImage />
            </S.ContainerUploadImage>
            <S.ContainerInputs>
              <Input
                inputType="text"
                id="editarNome"
                htmlFor="editarNome"
                label="Nome"
                name="editarNome"
              />

              <Input
                inputType="email"
                id="editaEmail"
                htmlFor="editarEmail"
                label="Email"
                key="email"
                name="editarEmail"
              />
              <Input
                inputType="text"
                id="editarCpf"
                htmlFor="editarCpf"
                label="CPF"
                key="cpf"
                name="editarCpf"
              />
              <InputPassword
                id="senhaAntiga"
                htmlFor="senhaAntiga"
                label="Senha antiga"
                key="senhaAntiga"
                name="senhaAntiga"
              />
              <InputPassword
                id="senhaNova"
                htmlFor="senhaNova"
                label="Senha nova"
                key="senhaNova"
                name="senhaNova"
              />
              <InputPassword
                id="editaConfirmarSenhaNova"
                htmlFor="editaConfirmarSenhaNova"
                label="Confirmar senha nova"
                key="ConfirmarSenhaNova"
                name="editaConfirmarSenhaNova"
              />
              <Button width="100%" to="/home">
                Editar perfil
              </Button>
            </S.ContainerInputs>
          </S.Form>
        </Formik>
      </S.ContainerForm>
    </S.ContainerEditarPerfil>
  );
};

export default EditarPerfil;
