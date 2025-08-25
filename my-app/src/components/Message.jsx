export default function Message() {
  function handleClick() {
    console.log("Hello, welcome to ReactJS");
  }
  return (
    <div>
      <button onClick={handleClick}>Click here to see the message</button>
    </div>
  );
}
