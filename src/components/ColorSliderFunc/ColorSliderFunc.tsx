import React, { useState } from "react";

const ColorSliderFunc = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <div>
      <h1>ColorSliderFunc</h1>
      <div
        style={{
          height: 50,
          width: 50,
          background: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
      <input
        type="range"
        min="0"
        max="255"
        value={red}
        onChange={(event) => setRed(parseInt(event.target.value))}
      />
      <input
        type="range"
        min="0"
        max="255"
        value={green}
        onChange={(event) => setGreen(parseInt(event.target.value))}
      />
      <input
        type="range"
        min="0"
        max="255"
        value={blue}
        onChange={(event) => setBlue(parseInt(event.target.value))}
      />
    </div>
  );
};

export default ColorSliderFunc;
