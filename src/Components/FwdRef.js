import { useRef } from "react";
import FwdRefChild from "./FwdRefChild";

const FwdRef = () => {
  let inputRef = useRef(null);
  const updateInput = () => {
    inputRef.current.value = "1000";
    inputRef.current.style.color = "red";
    inputRef.current.style.backgroundColor = "yellow";
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>Forward Ref in React</h1>
      <FwdRefChild ref={inputRef} />
      <button onClick={updateInput}>Update input box</button>
    </div>
  );
};

export default FwdRef;
