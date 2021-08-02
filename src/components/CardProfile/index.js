import { Card } from "./styles";

const CardProfile = ({
  cardName,
  backgroundColor,
  descriptions,
  img,
  margin,
  badge,
  select,
  onClick,
}) => {
  if (select) {
    return (
      <Card
        backgroundColor={backgroundColor}
        margin={margin}
        select={select}
        onClick={onClick}
      >
        <img className="badge" src={badge} alt="" />
        <div className="card-info">
          <span className="name">{cardName}</span>
        </div>
      </Card>
    );
  }
  return (
    <Card
      backgroundColor={backgroundColor}
      margin={margin}
      select={select}
      onClick={onClick}
    >
      <div className="card-icon">
        <img src={img} alt="Card profile icon" />
      </div>
      <div className="card-info">
        <span className="name">{cardName}</span>
        <ul className="description-list">
          {descriptions.map((description) => (
            <li className="description-item">{description}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export { CardProfile };
