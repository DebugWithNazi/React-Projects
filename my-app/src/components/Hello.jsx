function Hello(props) {
  return (
    <div>
      <h1>
        {props.person.name} {props.person.message} {props.person.emoji}{" "}
        {props.person.seatNum}
      </h1>
    </div>
  );
}

export default Hello;
