import React, { useState } from "react";

const AlignMeFunc = () => {
  const [alignment, setAlignment] = useState("left");

  // alignmentLeft = () => {
  //   setAlignment({ alignment: "left" });
  // };

  return (
    <div>
      <h1 style={{ textAlign: "right" }}>AlignMeFunc</h1>
      {/* <button onClick={alignmentLeft}>Left</button>
      <button onClick={alignmentCenter}>Center</button>
      <button onClick={alignmentRight}>Right</button> */}
    </div>
  );
};

export default AlignMeFunc;
