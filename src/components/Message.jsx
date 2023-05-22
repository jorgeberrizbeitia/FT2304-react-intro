function Message(props) {

  console.log(props)

  return (
    <p style={{color: props.color}}>
      <span>{props.num}</span>
      .
      <span>{props.children}</span>
    </p>
  )

}

export default Message

