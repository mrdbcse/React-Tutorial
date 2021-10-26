import { useState } from "react";
const HandleForm = () => {
  const [name, setName] = useState(null);
  const [interest, setInterest] = useState(null);
  const [TnC, setTnC] = useState(false);
  const getFormData = (e) => {
    e.preventDefault();
    console.log("Name::" + name);
    console.log("Interest::" + interest);
    console.log("TnC::" + TnC);
  };
  return (
    <form onSubmit={getFormData}>
      <h1>HANDEL FORM IN REACT</h1>
      <input
        type='text'
        placeholder='Enter Name'
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <br />
      <select onChange={(e) => setInterest(e.target.value)}>
        <option value='Select Options'>Select Options</option>
        <option value='Marvel'>Marvel</option>
        <option value='DC'>DC</option>
      </select>{" "}
      <br />
      <br />
      <input type='checkbox' onChange={(e) => setTnC(e.target.checked)} />{" "}
      <span>Accept the terms and conditions</span>
      <br />
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default HandleForm;
