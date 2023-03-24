import React from "react";
import Counter from "./components/CounterFunc/Counter";
import CounterClass from "./components/CounterClass/CounterClass";
import ToggleFun from "./components/ToggleFunc/ToggleFun";
import ToggleClass from "./components/ToggleClass/ToggleClass";
import FontSizerFunc from "./components/FontSizerFunc/FontSizerFunc";
import FontSizeClass from "./components/FontSizeClass/FontSizeClass";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      {/* without contractor | count is as props */}
      <CounterClass count={0} />
      <hr />
      <ToggleFun />
      <hr />
      {/* with contractor */}
      <ToggleClass />
      <hr />
      <FontSizerFunc />
      <hr />
      {/* with contractor */}
      <FontSizeClass />
    </div>
  );
}

export default App;
