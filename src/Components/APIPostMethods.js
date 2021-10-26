import { useState } from "react";

const APIPostMethods = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const URL = "http://localhost:3000/users";
  const addNewUser = (e) => {
    e.preventDefault();
    console.log("Name::" + name);
    console.log("Role::" + role);
    console.log("Address::" + address);
    console.log("Company::" + company);
    let data = { name, role, address, company };
    console.log(data);
    fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      //   console.table("Result:" + result);
      result.json().then((res) => {
        console.log(res);
      });
    });
  };
  return (
    <div>
      <h1>API POST METHOD</h1>
      <label htmlFor='Name'>Name</label>:
      <input
        type='text'
        value={name}
        name='name'
        onChange={(e) => {
          setName(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <label htmlFor='Role'>Role</label>:
      <input
        type='text'
        value={role}
        name='role'
        onChange={(e) => {
          setRole(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <label htmlFor='Address'>Address</label>:
      <input
        type='text'
        value={address}
        name='address'
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <label htmlFor='Company'>Company</label>:
      <input
        type='text'
        value={company}
        name='company'
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <button type='button' onClick={addNewUser}>
        Save new user
      </button>{" "}
    </div>
  );
};

export default APIPostMethods;
