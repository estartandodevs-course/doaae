import * as S from "./styles";
import { LogoBall } from "../../components/LogoBall";
import { InputUploadImage } from "../../components/InputUploadImage";
import { Input, InputPassword } from "../../components/Input";
import { Button } from "../../components/Button";
import { HeaderBar } from "../../components/HeaderBar";

const EditarPerfil = () => {
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
              errorMessage={null}
            />

            <Input
              inputType="email"
              id="editar-email"
              htmlFor="editar-email"
              label="Email"
              errorMessage={null}
              key="email"
            />
            <Input
              inputType="text"
              id="editar-cpf"
              htmlFor="editar-cpf"
              label="CPF"
              errorMessage={null}
              key="cpf"
            />
            <InputPassword
              id="senha-antiga"
              htmlFor="senha-antiga"
              errorMessage={null}
              label="Senha antiga"
            />
            <InputPassword
              id="senha-nova"
              htmlFor="senha-nova"
              errorMessage={null}
              label="Senha nova"
            />
            <InputPassword
              id="editar-confirmar-senha-nova"
              htmlFor="editar-confirmar-senha-nova"
              label="Confirmar senha nova"
              errorMessage={null}
            />
            <Button width="100%" to="/home">
              Editar perfil
            </Button>
          </S.ContainerInputs>
        </S.Form>
      </S.ContainerForm>
    </S.ContainerEditarPerfil>
  );
};

export default EditarPerfil;
