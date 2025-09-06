import { useEffect, useReducer, type ReactNode } from "react";
import CounterContext, { type CounterContextType } from "./CounterContext";

interface CounterProviderProps {
  children: ReactNode; //component
}
type CounterState = { count: number };
// state is object which holds data
type Action = { type: "INC" | "DEC" | "RESET" | "SET_BY"; payload: number };
// payload is actual data, on which action is performed
const initialState: CounterState = { count: 0 };
function reducer(state: CounterState, action: Action): CounterState {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    case "SET_BY":
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

function loadFromStorage(): CounterState {
  try {
    const raw = localStorage.getItem("counter-state");
    return raw ? JSON.parse(raw) : initialState;
  } catch {
    return initialState;
  }
}

export default function CounterProvider({ children }: CounterProviderProps) {
  const [state, dispatch] = useReducer(reducer, undefined, loadFromStorage);

  // persist like your Eval provider persists global state
  useEffect(() => {
    localStorage.setItem("counter-state", JSON.stringify(state));
  }, [state]);

  const value: CounterContextType = {
    count: state.count,
    increment: () => dispatch({ type: "INC" }),
    decrement: () => dispatch({ type: "DEC" }),
    reset: () => dispatch({ type: "RESET" }),
    setBy: (n: number) => dispatch({ type: "SET_BY", payload: n }),
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

//destructure: object peoperty get as variable , direct properties get karna as variable
