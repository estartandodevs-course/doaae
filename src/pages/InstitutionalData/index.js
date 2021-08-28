import React from "react";
import { useParams } from "react-router-dom";
import { instituicoes } from "../../mock/ongs";
import { CardActions } from "../../components/CardActions";
import Cape from "../../assets/img/cape.png";
import { HeaderBar } from "../../components/HeaderBar";
import { ViewActions } from "../../components/ViewActions";
import { CardToShedule } from "../../components/CardToShedule";
import Whatsapp from "../../assets/img/whatsapp.png";
import emailImage from "../../assets/img/email.png";
import foneImage from "../../assets/img/fone.png";
import actions from "../../mock/actionsData";
import * as S from "./styles";

const InstitutionalData = () => {
  const { idInst } = useParams();

  const getInstitution = instituicoes.find(({ id }) => id === idInst);

  const { logo, nome, categorias, endereco, telefone, email } = getInstitution;

  return (
    <S.SectionOfPage>
      <S.ContainerFromHeader>
        <HeaderBar backTo="/instituicoes">Instituição</HeaderBar>
      </S.ContainerFromHeader>
      <S.ImagefromInstitutional>
        <img src={Cape} alt="Capa" />
      </S.ImagefromInstitutional>
      <S.ContainerInstitutionData>
        <S.InformationFromInstitution>
          <img src={logo} alt={`Logo da instituição ${nome}`} />
          <S.PositionDataInstitution>
            <S.NameAndEvaluatioInstitution>
              <S.NameInstitution>{nome}</S.NameInstitution>
              <S.EvaluationInstitution>4.8</S.EvaluationInstitution>
            </S.NameAndEvaluatioInstitution>
            <S.ContainerCategoriesOfInstitutions>
              <S.CategoryItems>{categorias.join(" · ")}</S.CategoryItems>
            </S.ContainerCategoriesOfInstitutions>
          </S.PositionDataInstitution>
        </S.InformationFromInstitution>
        <S.ContainerDescription>
          <div>
            <S.GenericTitle>Endereço</S.GenericTitle>
            <p>{` ${endereco.logradouro}, ${endereco.numero}, ${endereco.complemento}. ${endereco.estado}.`}</p>
          </div>
          <S.AboutTheInstitution>
            <S.GenericTitle>Sobre a ONG Mais</S.GenericTitle>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              viverra lacus metus, nec vestibulum arcu placerat vitae. Praesent
              velit orci, congue eget lacus eu, convallis lacinia tellus. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </S.AboutTheInstitution>
        </S.ContainerDescription>
        <S.ContainerActions>
          <S.GenericTitle>Últimas Ações</S.GenericTitle>
          <S.ContainerCards>
            {actions.map(({ id, cape, title, description, location }) => (
              <CardActions
                key={id}
                cape={cape}
                title={title}
                description={description}
                location={location}
              />
            ))}
          </S.ContainerCards>
          <ViewActions />
        </S.ContainerActions>
        <CardToShedule />
      </S.ContainerInstitutionData>
      <S.ContainerFooter>
        <div>
          <S.SocialNetwork>
            <img src={Whatsapp} alt="imagem do whatsapp" />
            <span>Whatsapp</span>
          </S.SocialNetwork>
          <S.ContainerContactGeneric>
            <p>{telefone}</p>
            <p>{telefone}</p>
          </S.ContainerContactGeneric>
        </div>
        <S.ContainerNetworkGeneric>
          <S.SocialNetwork>
            <img src={emailImage} alt="imagem do email" />
            <span>Email</span>
          </S.SocialNetwork>
          <S.ContainerContactGeneric>
            <span>{email}</span>
          </S.ContainerContactGeneric>
        </S.ContainerNetworkGeneric>
        <S.ContainerNetworkGeneric>
          <S.SocialNetwork>
            <img src={foneImage} alt="imagem do telefone" />
            <span>Telefone</span>
          </S.SocialNetwork>
          <S.ContainerContactGeneric>
            <span>{telefone}</span>
          </S.ContainerContactGeneric>
        </S.ContainerNetworkGeneric>
      </S.ContainerFooter>
    </S.SectionOfPage>
  );
};

export default InstitutionalData;
