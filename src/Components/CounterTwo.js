import { useState } from "react";

const CounterTwo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button style={{ margin: "2px" }} onClick={() => setCount(count + 1)}>
        +
      </button>
      <button style={{ margin: "2px" }} onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
};

export default CounterTwo;
