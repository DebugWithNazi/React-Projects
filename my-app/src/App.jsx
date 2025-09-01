import Form from "./components/Form";
import { act, useReducer, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    if (action.type === "increment") {
      return state + action.payLoad;
    } else if (action.type === "decrement") {
      return state - action.payLoad;
    } else {
      return state;
    }
  }

  return (
    <>
      <h2>Reducer</h2>

      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <div>{state}</div>
      <button onClick={() => dispatch({ type: "increment", payLoad: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payLoad: 1 })}>
        Decrement
      </button>

      <h2>Form Component</h2>
      <div>
        <Form />
      </div>
    </>
  );
}

export default App;
