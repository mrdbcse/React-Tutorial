import { useContext } from "react";
import { globalState } from "./Parent";

const SuperChild = () => {
  const { appColor, changeColor } = useContext(globalState);
  return (
    <div>
      <h1 style={{ backgroundColor: appColor }}>Super Child Component</h1>
      <button onClick={() => changeColor("yellow")}>Change Color</button>
    </div>
  );
};

export default SuperChild;
