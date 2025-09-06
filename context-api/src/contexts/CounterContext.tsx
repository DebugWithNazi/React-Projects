import { createContext } from "react";

export type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setBy: (value: number) => void;
};

const CounterContext = createContext<CounterContextType | null>(null);
export default CounterContext;
