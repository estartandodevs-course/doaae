import * as S from "./styles";

const CardProfile = ({
  cardName,
  backgroundColor,
  descriptions,
  img,
  badge,
  select,
  onClick,
  small,
}) => {
  if (small) {
    console.log(small);
    return (
      <S.Card
        backgroundColor={backgroundColor}
        select={select}
        onClick={onClick}
        small={small}
      >
        {select && (
          <S.Badge
            className="badge"
            src={badge}
            alt="Icone de card Selecionado"
          />
        )}
        <S.CardInfo small={small}>
          <S.Name>{cardName}</S.Name>
        </S.CardInfo>
      </S.Card>
    );
  }
  return (
    <S.Card backgroundColor={backgroundColor} select={select} onClick={onClick}>
      <S.CardIcon>
        <S.Icon src={img} alt="Icone do perfil" />
      </S.CardIcon>
      <S.CardInfo>
        <S.Name>{cardName}</S.Name>
        <S.DescriptionList
          className="description-list"
          dangerouslySetInnerHTML={{ __html: descriptions }}
        />
      </S.CardInfo>
    </S.Card>
  );
};

export { CardProfile };
