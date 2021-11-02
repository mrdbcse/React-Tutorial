import { useRef } from "react";

const UncontrolledComponents = () => {
  // Uncontroled Components are not controlled through states
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Input Field 1 value:", inputRef1.current.value);
    console.log("Input Field 2 value:", inputRef2.current.value);
  };
  return (
    <div>
      <h1>Uncontrolled Components</h1>
      <form onSubmit={submitForm}>
        <input ref={inputRef1} type='text' /> <br /> <br />
        <input ref={inputRef2} type='text' /> <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledComponents;
