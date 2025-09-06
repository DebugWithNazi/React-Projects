import { useState } from "react";
import { useCounterContext } from "./UseCounterContext";

export default function Counter() {
  const { count, increment, decrement, reset, setBy } = useCounterContext();
  const [step, setStep] = useState(5);
  return (
    <>
      <div
        style={{
          maxWidth: 360,
          margin: "2rem auto",
          padding: 16,
          border: "1px solid #eee",
          borderRadius: 12,
        }}
      >
        <h2 style={{ marginTop: 0 }}>Counter</h2>
        <p style={{ fontSize: 28, fontWeight: 700, margin: "8px 0 16px" }}>
          {count}
        </p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button onClick={decrement}>-1</button>
          <button onClick={increment}>+1</button>
          <button onClick={reset}>Reset</button>
        </div>

        <hr style={{ margin: "16px 0" }} />

        <label style={{ display: "block", marginBottom: 8 }}>
          Step:&nbsp;
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value || 0))}
            style={{ width: 80 }}
          />
        </label>
        <button onClick={() => setBy(step)}>Add {step}</button>
      </div>
    </>
  );
}
