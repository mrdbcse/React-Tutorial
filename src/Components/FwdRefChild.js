import { forwardRef } from "react";

const FwdRefChild = (props, ref) => {
  return (
    <div>
      <input type='text' ref={ref} />
    </div>
  );
};

export default forwardRef(FwdRefChild);
