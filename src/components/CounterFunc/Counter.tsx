import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(() => count + 1);
  };

  const handleDecrease = () => {
    count === 0 ? setCount(0) : setCount(() => count - 1);
  };
  return (
    <div>
      <h1>CounterFunc</h1>
      <p>Amount: {count}</p>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
};

export default Counter;
