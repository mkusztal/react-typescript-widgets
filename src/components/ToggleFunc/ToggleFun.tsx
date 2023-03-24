import React, { useState } from "react";

const ToggleFun = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <h1>ToggleFun</h1>
      <p>{show ? "Hello" : ""}</p>
      <button onClick={handleToggle}>{show ? "Hide" : "Show"}</button>
    </div>
  );
};

export default ToggleFun;
