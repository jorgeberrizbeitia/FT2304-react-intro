import tequeñosImg from "../assets/tequeños.jpg";

function Card() {

  const cardStyle = {
    backgroundColor: "lightgray",
    borderRadius: "10px",
    opacity: "0.7",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  };

  return (
    <div className="card" style={cardStyle}>
      <h5>Tequeños</h5>
      {/* <img src="https://www.annarecetasfaciles.com/files/tequenos-de-queso-venezolanos.jpg" alt="tequeños" width="200px"/> */}
      <img src={tequeñosImg} alt="tequeños" width="200px" />
    </div>
  );
}

export default Card;
