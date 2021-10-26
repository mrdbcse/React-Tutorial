import { useState } from "react";
const HideShow = () => {
  let Show = "Show";
  let Hide = "Hide";
  const [status, setStatus] = useState(false);
  return (
    <div>
      <h1>TOGGLE A BUTTON</h1>
      {status ? <h1>Hello World!!!!!!!!</h1> : null}
      {/* <button onClick={() => setStatus(true)}>Show</button>
      <button onClick={() => setStatus(false)}>Hide</button> */}
      <button onClick={() => setStatus(!status)}>{status ? Hide : Show}</button>
    </div>
  );
};

export default HideShow;
