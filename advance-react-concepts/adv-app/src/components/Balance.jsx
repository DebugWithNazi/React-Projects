import { useReducer, useState } from "react";

export default function Balance() {
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount, setAmount] = useState(0);

  function reducer(state, action) {
    if (action.type === "add") {
      return { ...state, balance: state.balance + action.payload };
    } else if (action.type === "subtract") {
      return { ...state, balance: state.balance - action.payload };
    }
  }
  return (
    <>
      {state.balance}
      <div>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="text"
          id=""
          name=""
        />
        <button
          onClick={() => {
            dispatch({ type: "add", payload: Number(amount) });
            setAmount(0);
          }}
        >
          deposit
        </button>
        <button
          onClick={() => {
            dispatch({ type: "subtract", payload: Number(amount) });
            setAmount(0);
          }}
        >
          withdraw
        </button>
      </div>
    </>
  );
}
