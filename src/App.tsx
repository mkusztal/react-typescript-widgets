import React from "react";
import Counter from "./components/CounterFunc/Counter";
import CounterClass from "./components/CounterClass/CounterClass";
import ToggleFun from "./components/ToggleFunc/ToggleFun";
import ToggleClass from "./components/ToggleClass/ToggleClass";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <CounterClass count={0} />
      <hr />
      <ToggleFun />
      <hr />
      <ToggleClass show={false} />
    </div>
  );
}

export default App;
