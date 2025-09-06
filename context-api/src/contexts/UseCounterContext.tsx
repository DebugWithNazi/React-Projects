import { useContext } from "react";
import CounterContext from "./CounterContext";

export const useCounterContext = () => {
  const ctx = useContext(CounterContext);
  if (!ctx)
    throw new Error("useCounterContext must be used within a CounterProvider");
  return ctx;
};
