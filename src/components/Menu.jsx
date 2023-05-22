import tequeñosImg from "../assets/tequeños.jpg";
import pabellonImg from "../assets/pabellon.jpg";
import guayabaImg from "../assets/guayaba.jpg";

import Card from "./Card";

function Menu() {

  return (
    <section>
      <h3 style={{ textDecoration: "underline" }}>El menú de hoy es:</h3>

      <Card />
      <Card />
      <Card />

      {/* <div className="card" style={cardStyle}>
        <h5>Tequeños</h5>
        <img src={tequeñosImg} alt="tequeños" width="200px" />
      </div>

      <div className="card" style={cardStyle}>
        <h5>Pabellón Criollo</h5>
        <img src={pabellonImg} alt="pabellon" width="200px" />
      </div>

      <div className="card" style={cardStyle}>
        <h5>Dulce de Guayaba</h5>
        <img src={guayabaImg} alt="guayaba" width="200px" />
      </div> */}

    </section>
  );
}

export default Menu;
