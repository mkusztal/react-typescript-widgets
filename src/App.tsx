import React from "react";
import Counter from "./components/Counter/Counter";
import CounterClass from "./components/CounterClass/CounterClass";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <CounterClass count={0} />
    </div>
  );
}

export default App;
