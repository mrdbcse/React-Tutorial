import { useContext } from "react";
import { globalState } from "./Parent";
import SuperChild from "./SuperChild";

const Child = () => {
  const { appColor, changeColor } = useContext(globalState);
  console.log("AppColor:" + appColor);
  return (
    <div>
      <h1 style={{ backgroundColor: appColor }}>Child Component</h1>
      <button onClick={() => changeColor("white")}>Change Color</button>

      <SuperChild />
    </div>
  );
};

export default Child;
