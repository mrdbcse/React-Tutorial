import { useEffect, useRef } from "react";

const UserCmpOne = (props) => {
  const lastPropsValue = useRef();
  const previousPropsValue = lastPropsValue.current;
  useEffect(() => {
    lastPropsValue.current = props.count;
  });
  return (
    <div>
      <h1>User Component</h1>
      <h1>Count:{props.count}</h1>
      <h1>Previous Props Value:{previousPropsValue}</h1>
    </div>
  );
};

export default UserCmpOne;
