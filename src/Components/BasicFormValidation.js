import { useState } from "react";
const BasicFormValidation = () => {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const userNameHandler = (e) => {
    let data = e.target.value;
    setUserName(data);
    if (data.length < 5) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
  };
  const userPassHandler = (e) => {
    let data = e.target.value;
    setUserPass(data);
    if (data.length < 8) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
  };
  const submitHandler = (e) => {
    if (userName.length < 5 || userPass.length < 8) {
      alert("Please Type Correct Values");
    } else {
      alert("Form submitted successfully");
    }
    e.preventDefault();
  };
  return (
    <div>
      <h1>BASIC FORM VALIDATION</h1>
      <form onSubmit={submitHandler}>
        <span>
          {userErr ? <span>Minimum length of userName should be 5</span> : null}{" "}
          <br />
        </span>
        <input
          type='text'
          placeholder='Enter user Id'
          onChange={userNameHandler}
        />{" "}
        <br />
        <span>
          {passErr ? <span>Minimum length of password should be 8</span> : null}{" "}
          <br />
        </span>
        <input
          type='password'
          placeholder='Enter password'
          onChange={userPassHandler}
        />{" "}
        <br />
        <button type='submit'>Login</button>
        <button type='reset'>Clear</button>
      </form>
    </div>
  );
};

export default BasicFormValidation;
