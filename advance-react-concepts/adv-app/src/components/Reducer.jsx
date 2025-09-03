import { useReducer } from "react";

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });

  function reducer(state, action) {
    if (action.type === "increment") {
      return { ...state, count: state.count + state.incrementBy };
    } else if (action.type === "decrement") {
      return { ...state, count: state.count - state.incrementBy };
    } else if (action.type === "incrementBy") {
      return { ...state, incrementBy: action.payload };
    }
  }
  return (
    <>
      <div>
        <input
          value={state.incrementBy}
          onChange={(e) =>
            dispatch({ type: "incrementBy", payload: Number(e.target.value) })
          }
          type="text"
          name=""
          id=""
        />
      </div>
      <div>Count: {state.count}</div>
      <div>Increment By: {state.incrementBy}</div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
