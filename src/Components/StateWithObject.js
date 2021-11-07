import { useState } from "react";

const StateWithObject = () => {
  const [data, setData] = useState({
    name: "Amit",
    age: 22,
  });
  return (
    <div>
      <h1>State with Object</h1>
      <input
        type='text'
        placeholder='Enter Name'
        value={data.name}
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
      />
      <input
        type='text'
        placeholder='Enter Age'
        value={data.age}
        onChange={(e) => {
          setData({ ...data, age: e.target.value });
        }}
      />
      <h3>{data.name}</h3>
      <h3>{data.age}</h3>
    </div>
  );
};

export default StateWithObject;
