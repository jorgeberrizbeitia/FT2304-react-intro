

function Details(props) {

  // console.log(props)

  return (
    <>
      <h3>{props.user.name}</h3>
      <p>{props.user.color}</p>
    </>
  )

}

export default Details