

function Card({ patata, dish, img }) {

  // console.log(props)
  // const { patata, dish, img } = props

  let message;
  if (dish === "Tequeños") {
    message = "OFERTA"
  } else {
    message = ""
  }

  const cardStyle = {
    // color: color,
    borderRadius: "10px",
    opacity: "0.7",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: patata
  };

  return (
    <div className="card" style={cardStyle}>
      <h5>{dish}</h5>
      <p>{message}</p>
      {/* <img src="https://www.annarecetasfaciles.com/files/tequenos-de-queso-venezolanos.jpg" alt="tequeños" width="200px"/> */}
      <img src={img} alt="tequeños" width="200px" />
    </div>
  );
}

export default Card;
