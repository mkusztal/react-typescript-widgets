import React, { useEffect, useState } from "react";

const ClockFunc = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => setTime(new Date()), 1000);
    return clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>ClockFunc</h1>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default ClockFunc;
