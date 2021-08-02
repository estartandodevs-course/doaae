import { Card } from "./styles";

// cardName - Título do card
// backgroundColor - Cor de fundo
// descriptions - Descrição do card em uma lista
// Img - Imagem da parte de cima do card
// Badge - Ícone de seleção
// Select - Verificar se esta selecionado ou não
// onClick - Rodar a função de click que seta o estado selecionado.

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
