import { useState } from "react";
const User = () => {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  const getInput = (event) => {
    console.log(event.target.value);
    setData(event.target.value);
    setPrint(false);
  };
  return (
    <div>
      <h1>Get Input box value!</h1>
      {print ? <h4>{data}</h4> : null}
      <input type='text' onChange={getInput} />
      <button onClick={() => setPrint(true)}>Print Data</button>
    </div>
  );
};

export default User;
