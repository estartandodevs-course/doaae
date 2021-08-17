import * as S from "./styles";
import { HeaderBar } from "../../components/HeaderBar";
import { Input } from "../../components/Input";
import { CheckBox } from "../../components/Checkbox";
import { Button } from "../../components/Button";

const AgendarDoacao = () => {
  const DATA_USER = {
    isLogged: true,
    profileImage: undefined,
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <S.Container>
      <S.Header>
        <HeaderBar
          isLogged={DATA_USER.isLogged}
          profileImage={DATA_USER.profileImage}
        >
          Agendar doação
        </HeaderBar>
      </S.Header>
      <S.Text>Preencha os dados de acordo com sua doação</S.Text>
      <S.SectionTitle>Agendando doação para ONG Mais</S.SectionTitle>

      <S.Form onSubmit={submit}>
        <Input
          inputType="text"
          id="itens"
          htmlFor="itens"
          label="Itens para doar"
          errorMessage={null}
        />

        <Input
          inputType="text"
          id="detalhes"
          htmlFor="detalhes"
          label="Detalhes"
          errorMessage={null}
        />
        <S.Check>
          <CheckBox />
        </S.Check>

        <S.SectionTitle>
          Quando seria um bom dia para você ir entregar a doação?
        </S.SectionTitle>

        <S.DateContainer>
          <Input inputType="date" errorMessage={null} />
        </S.DateContainer>

        <Button>Avançar</Button>
      </S.Form>
    </S.Container>
  );
};

export default AgendarDoacao;
