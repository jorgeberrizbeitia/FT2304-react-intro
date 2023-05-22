import Container from "./Container";
import Details from "./Details";
import Message from "./Message";

import ReactPlayer from 'react-player'

function Test() {

  const user1 = {
    name: "Gandalf",
    color: "gray"
  }

  const user2 = {
    name: "Saruman",
    color: "white"
  }

  return(
    <div>
      <h3>Probando Props</h3>

      {/* <Message num={1} text={"Zelda Tears of the Kingdom"} color="brown" /> */}

      <Message num={1} color="brown">
        Zelda Tears of the Kingdom
      </Message>

      <Message num={2} color="green">
        Sea of Thieves
      </Message>

      {/* props.children es TODO el contenido interno entre la etiqueta que abre y cierra del componente */}

      

     

      <Container bc={"magenta"}>
        <Details user={user1}/>
      </Container>

      <Container bc={"magenta"}>
        <Details user={user2}/>
      </Container>

      <Container bc={"salmon"}>
        <Message num={3}>
          God War
        </Message>
      </Container>

      <div>
        <ReactPlayer url='https://youtu.be/dQw4w9WgXcQ' controls={true}/>
      </div>

    </div>
  )
}


export default Test;