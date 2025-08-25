export default function ConditionalComponent() {
  //   const display = false;
  //   let message; // by using element variable we solve the problem to return multiple times
  //   if (display) {
  //     message = <h1>Hello World</h1>;
  //   } else {
  //     message = <h1>Goodbye World</h1>;
  //   }
  //   return message;

  const display = false;
  return display ? <h1>Hello World</h1> : <h1>Goodbye World</h1>;
}
