import { Formik } from "formik";
import * as Yup from "yup";
import * as S from "./styles";
import { HeaderBar } from "../../components/HeaderBar";
import { Input } from "../../components/Input";
import { CheckBox } from "../../components/Checkbox";
import { Button } from "../../components/Button";
import { LogoBall } from "../../components/LogoBall";

const AgendarDoacao = () => {
  const validationOfForm = Yup.object().shape({
    itens: Yup.string().required("Preencha esse campo para continuar"),
    date: Yup.string().required("Preencha esse campo para continuar"),
  });
  return (
    <S.Container>
      <S.ContainerHeader>
        <S.Header>
          <HeaderBar>Agendar doação</HeaderBar>
        </S.Header>
        <p>Preencha os dados de acordo com sua doação</p>
        <h1>Agendando doação para ONG Mais</h1>
      </S.ContainerHeader>
      <S.ContainerInfo>
        <LogoBall backTo="instituicoes" />
        <S.ContainerText>
          <h1>Agende uma doação</h1>
          <p>Preencha os dados de acordo com sua doação</p>
        </S.ContainerText>
      </S.ContainerInfo>

      <S.ContainerMasterForm>
        <S.ContainerForm>
          <Formik
            initialValues={{
              itens: "",
              date: "",
            }}
            validationSchema={validationOfForm}
          >
            {({ errors, touched }) => {
              return (
                <S.Form>
                  <Input
                    inputType="text"
                    id="itens"
                    htmlFor="itens"
                    label="Itens para doar"
                    name="itens"
                    error={errors.itens && touched.itens}
                  />

                  <textarea
                    name="descricao"
                    id="descricao"
                    placeholder="Detalhes (se preferir, dê mais detalhes sobre sua doação)"
                  />

                  <S.Check>
                    <CheckBox />
                  </S.Check>

                  <span>
                    Quando seria um bom dia para você ir entregar a doação?
                  </span>

                  <S.DateContainer>
                    <Input
                      type="date"
                      name="date"
                      error={errors.date && touched.date}
                    />
                  </S.DateContainer>

                  <Button to="/doacaoagendada" width="100%">
                    Avançar
                  </Button>
                </S.Form>
              );
            }}
          </Formik>
        </S.ContainerForm>
      </S.ContainerMasterForm>
    </S.Container>
  );
};

export default AgendarDoacao;
