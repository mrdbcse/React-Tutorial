import { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(1);
  const multiCount = useMemo(() => {
    console.log("multiCount from useMemo Called");
    return count * 5;
  }, [count]);
  return (
    <div>
      <h1>Count:{count}</h1>
      <h1>Flag:{flag}</h1>
      <h1>{multiCount}</h1>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setFlag(flag * 10)}>Update Flag</button>
    </div>
  );
};

export default UseMemoExample;
