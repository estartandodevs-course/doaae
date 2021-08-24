import React from "react";
import { CardActions } from "../../components/CardActions";
import { HeaderBar } from "../../components/HeaderBar";
import { ViewActions } from "../../components/ViewActions";
import { CardToShedule } from "../../components/CardToShedule";
import Whatsapp from "../../assets/img/whatsapp.png";
import emailImage from "../../assets/img/email.png";
import foneImage from "../../assets/img/whatsapp.png";
import actions from "../../mock/actionsData";
import * as S from "./styles";

const InstitutionalData = ({
  cape,
  logo,
  nome,
  categorias,
  logradouro,
  numero,
  complemento,
  estado,
  telefone,
  email,
}) => {
  return (
    <S.SectionOfPage>
      <S.ContainerFromHeader>
        <HeaderBar isLogged>Instituição</HeaderBar>
      </S.ContainerFromHeader>
      <S.ImagefromInstitutional bg={cape} />
      <S.ContainerInstitutionData>
        <S.InformationFromInstitution>
          <img src={logo} />
          <S.PositionDataInstitution>
            <S.NameAndEvaluatioInstitution>
              <S.NameInstitution>{nome}</S.NameInstitution>
              <S.EvaluationInstitution>4.8</S.EvaluationInstitution>
            </S.NameAndEvaluatioInstitution>
            <S.ContainerCategoriesOfInstitutions>
              <S.CategoryItems>{categorias}</S.CategoryItems>
            </S.ContainerCategoriesOfInstitutions>
          </S.PositionDataInstitution>
        </S.InformationFromInstitution>
        <S.ContainerDescription>
          <div>
            <S.GenericTitle>Endereço</S.GenericTitle>
            <p>{` ${logradouro}, ${numero}, ${complemento}. ${estado}.`}</p>
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
