import { useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef(null);
  const inputHandler = () => {
    console.log("inputHandler called!!!!");
    inputRef.current.value = "Debjyoti";
    inputRef.current.focus();
    inputRef.current.style.display = "none";
  };
  return (
    <div>
      <h1>Use Ref Example</h1>
      <input type='text' ref={inputRef} />
      <button onClick={inputHandler}>Click here</button>
    </div>
  );
};

export default UseRefExample;
