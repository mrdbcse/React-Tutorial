import { useState } from "react";
const ConditionalRendering = () => {
  const [login, setLogin] = useState(3);
  return (
    <div>
      <h1>CONDITONAL RENDERING</h1>
      {login === 1 ? (
        <h1>Welcome User 1</h1>
      ) : login === 2 ? (
        <h1>Welcome User 2</h1>
      ) : login === 3 ? (
        <h1>Welcome User 3</h1>
      ) : (
        <h1>Welcome Guest User</h1>
      )}
    </div>
  );
};

export default ConditionalRendering;
