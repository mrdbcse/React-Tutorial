import { useState } from "react";
import { createContext } from "react";
import Child from "./Child";
import OtherChild from "./OtherChild";
export const globalState = createContext();
const Parent = () => {
  const [color, setColor] = useState("green");
  const changeColorHandler = (updatedColor) => {
    setColor(updatedColor);
  };
  return (
    <globalState.Provider
      value={{ appColor: color, changeColor: changeColorHandler }}
    >
      <div>
        <h1>Parent Component</h1>
        <Child />
        <OtherChild />
      </div>
    </globalState.Provider>
  );
};

export default Parent;
