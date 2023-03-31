import React from "react";
import Counter from "./components/CounterFunc/Counter";
import CounterClass from "./components/CounterClass/CounterClass";
import ToggleFun from "./components/ToggleFunc/ToggleFun";
import ToggleClass from "./components/ToggleClass/ToggleClass";
import FontSizerFunc from "./components/FontSizerFunc/FontSizerFunc";
import FontSizeClass from "./components/FontSizeClass/FontSizeClass";
import AlignMeFunc from "./components/AlignMeFunc/AlignMeFunc";
import AlignMeClass from "./components/AlignMeClass/AlignMeClass";
import ClockFunc from "./components/ClockFunc/ClockFunc";
import ClockClass from "./components/ClockClass/ClockClass";

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
      <hr />
      <AlignMeFunc />
      <hr />
      <AlignMeClass />
      <hr />
      <ClockFunc />
      <hr />
      <ClockClass />
    </div>
  );
}

export default App;
