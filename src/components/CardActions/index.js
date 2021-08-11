import * as S from "./styles";

const CardActions = ({
  cape,
  title,
  description,
  location,
  category,
  isOpen,
  onClick,
}) => {
  if (isOpen) {
    console.log(isOpen);
    return (
      <S.Container onClick={onClick} small={isOpen}>
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
    );
  }
  return (
    <S.Container onClick={onClick}>
      <S.ContainerCape>
        <S.Cape src={cape} />
        <S.Category>{category}</S.Category>
      </S.ContainerCape>
    </S.Container>
  );
};

export { CardActions };
