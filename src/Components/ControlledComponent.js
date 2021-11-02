import { useState } from "react";

const ControlledComponent = () => {
  // Controlled Components are handled through state
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>Controlled Component</h1>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h3>Value:{value}</h3>
    </div>
  );
};

export default ControlledComponent;
