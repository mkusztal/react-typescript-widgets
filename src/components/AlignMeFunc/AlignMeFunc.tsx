import React, { useState } from "react";

type TextAlign =
  | "center"
  | "end"
  | "justify"
  | "left"
  | "match-parent"
  | "right"
  | "start";

const AlignMeFunc = () => {
  const [alignment, setAlignment] = useState<TextAlign>("left");

  const alignmentLeft = () => {
    setAlignment("left");
  };

  const alignmentCenter = () => {
    setAlignment("center");
  };

  const alignmentRight = () => {
    setAlignment("right");
  };

  console.log(alignment);
  return (
    <div>
      <h1 style={{ textAlign: alignment }}>AlignMeFunc</h1>
      <button onClick={alignmentLeft}>Left</button>
      <button onClick={alignmentCenter}>Center</button>
      <button onClick={alignmentRight}>Right</button>
    </div>
  );
};

export default AlignMeFunc;
