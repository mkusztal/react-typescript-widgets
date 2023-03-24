import React, { useState } from "react";

const FontSizerFunc = () => {
  const [size, setSize] = useState(20);

  const increaseSize = () => {
    setSize(() => size + 5);
  };

  const decreaseSize = () => {
    setSize(() => size - 5);
  };

  return (
    <div>
      <h1>FontSizerFunc</h1>
      <button onClick={increaseSize}>Grown</button>
      <button onClick={decreaseSize}>Shrink</button>
      <p style={{ fontSize: `${size}px` }}>{size}px</p>
    </div>
  );
};

export default FontSizerFunc;
