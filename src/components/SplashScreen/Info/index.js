const Info = ({ image, text }) => {
  return (
    <div className="info">
      <img className="map-icon" src={image} alt="Mapa Icone" />
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export { Info };
