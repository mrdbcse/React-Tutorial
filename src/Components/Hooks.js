import { useEffect, useState } from "react";

const Hooks = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    //   effect
    console.log("useEffect:", number);
    return () => {
      //   cleanup
    };
  }, [
    /*input*/
    number,
    // props.count
    // props.data
    // useEffect also runs on props values
  ]);
  return (
    <div>
      <h1>Hooks</h1>
      <h1>{number}</h1>
      <button style={{ margin: "5px" }} onClick={() => setNumber(number + 1)}>
        +
      </button>
      <button style={{ margin: "5px" }} onClick={() => setNumber(number - 1)}>
        -
      </button>
      <button style={{ margin: "5px" }} onClick={() => setNumber(0)}>
        Reset
      </button>
    </div>
  );
};

export default Hooks;
