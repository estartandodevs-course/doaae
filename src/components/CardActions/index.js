import { useState } from "react";
import * as S from "./styles";

const CardActions = ({ cape, title, description, location, category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <S.Container onClick={() => setIsOpen(!isOpen)} small={isOpen}>
          <S.ContainerCape>
            <S.Cape src={cape} />
            <S.Category>{category}</S.Category>
          </S.ContainerCape>
          <S.ContainerInfo>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.Location>Endereço</S.Location>
            <S.LocationInfo>{location}</S.LocationInfo>
          </S.ContainerInfo>
        </S.Container>
      ) : (
        <S.Container onClick={() => setIsOpen(!isOpen)}>
          <S.ContainerCape>
            <S.Cape src={cape} />
            <S.Category>{category}</S.Category>
          </S.ContainerCape>
        </S.Container>
      )}
    </>
  );
};

export { CardActions };
