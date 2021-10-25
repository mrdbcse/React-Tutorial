import { useState } from "react";
const FState = () => {
  const [Num, setNum] = useState(0);
  const updateNum = () => {
    setNum(Num + 1);
  };
  const resetNum = () => {
    setNum(Num - 1);
  };
  console.warn("________________________________");
  return (
    <div>
      <h1>{Num}</h1>
      <button style={{ margin: "10px" }} onClick={updateNum}>
        +
      </button>
      <button style={{ margin: "10px" }} onClick={resetNum}>
        -
      </button>
    </div>
  );
};

export default FState;
