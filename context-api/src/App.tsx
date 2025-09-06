import "./App.css";
import Counter from "./contexts/Counter";
import CounterProvider from "./contexts/CounterProvider";

function App() {
  return (
    <>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </>
  );
}

export default App;
