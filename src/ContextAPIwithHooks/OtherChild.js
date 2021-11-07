import { useContext } from "react";
import { globalState } from "./Parent";

const OtherChild = () => {
  const { appColor, changeColor } = useContext(globalState);
  return (
    <div>
      <h1 style={{ backgroundColor: appColor }}>Other Child Component</h1>
      <button onClick={() => changeColor("pink")}>Change Color</button>
    </div>
  );
};

export default OtherChild;
