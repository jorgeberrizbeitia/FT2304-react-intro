function Container(props) {

  // quiero que este componente funcione como envoltorio de otro
  // y le de unos estilos especificos

  const style = {
    backgroundColor: props.bc,
    color: "brown",
    border: "solid 2px black",
    borderRadius: "10px",
    margin: "20px"
  }

  return (
    <div style={style}>
      {props.children}
      {/* cualquier contenido entre la etiqueta que abre y cierra */}
    </div>
  )

}

export default Container