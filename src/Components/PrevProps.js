import { useState } from "react";
import UserCmpOne from "./UserCmpOne";

const PrevProps = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Previous Props</h1>
      <UserCmpOne count={count} />
      <button
        onClick={() => {
          setCount(Math.floor(Math.random() * 10));
        }}
      >
        Update Counter
      </button>
    </div>
  );
};

export default PrevProps;
