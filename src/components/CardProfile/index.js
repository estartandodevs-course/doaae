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
    return (
      <S.Card
        backgroundColor={backgroundColor}
        select={select}
        onClick={onClick}
        small={small}
      >
        {select && (
          <img className="badge" src={badge} alt="Icone de card Selecionado" />
        )}
        <div className="card-info">
          <span className="name">{cardName}</span>
        </div>
      </S.Card>
    );
  }
  return (
    <S.Card backgroundColor={backgroundColor} select={select} onClick={onClick}>
      <S.CardIcon className="card-icon">
        <img src={img} alt="Icone do perfil" />
      </S.CardIcon>
      <div className="card-info">
        <span className="name">{cardName}</span>
        <ul
          className="description-list"
          dangerouslySetInnerHTML={{ __html: descriptions }}
        />
      </div>
    </S.Card>
  );
};

export { CardProfile };
