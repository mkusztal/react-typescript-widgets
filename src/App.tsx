import React from "react";
import Counter from "./components/Counter/Counter";
import CounterClass from "./components/CounterClass/CounterClass";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <CounterClass />
    </div>
  );
}

export default App;
