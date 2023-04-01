import React, { useState } from "react";

const ChangeColorFunc = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");

  const changeColor = () => {
    setColor(text);
  };

  return (
    <div>
      <h1>ChangeColorFunc</h1>
      <input
        type="text"
        placeholder="color"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={changeColor}>Change</button>
      <h1 style={{ color }}>{color}</h1>
    </div>
  );
};

export default ChangeColorFunc;
