import { Card } from "./styles";

const CardProfile = ({
  cardName,
  backgroundColor,
  descriptions,
  img,
  badge,
  select,
  onClick,
}) => {
  if (select) {
    return (
      <Card backgroundColor={backgroundColor} select={select} onClick={onClick}>
        <img className="badge" src={badge} alt="Icone de card Selecionado" />
        <div className="card-info">
          <span className="name">{cardName}</span>
        </div>
      </Card>
    );
  }
  return (
    <Card backgroundColor={backgroundColor} select={select} onClick={onClick}>
      <div className="card-icon">
        <img src={img} alt="Icone do perfil" />
      </div>
      <div className="card-info">
        <span className="name">{cardName}</span>
        <ul
          className="description-list"
          dangerouslySetInnerHTML={{ __html: descriptions }}
        />
      </div>
    </Card>
  );
};

export { CardProfile };
