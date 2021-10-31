import { useEffect, useState } from "react";
const APIGetMethods = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const [userId, setUserId] = useState(null);
  const URL = "http://localhost:3000/users";
  useEffect(() => {
    getList();
  }, []);
  // console.log(data);
  const getList = () => {
    //   ------- FETCH API GET METHOD -----------------
    fetch(URL).then((data) => {
      data.json().then((res) => {
        setData(res);
        setName(res[0].name);
        setRole(res[0].role);
        setAddress(res[0].address);
        setCompany(res[0].company);
        setUserId(res[0].id);
      });
    });
  };
  const deleteUser = (id) => {
    console.log(id);
    // ---------- FETCH API DELETE METHOD------------------
    fetch(URL + `/${id}`, { method: "DELETE" }).then((result) => {
      result.json().then((res) => {
        console.log(res);
        getList();
      });
    });
  };
  const editUser = (id) => {
    console.log("UserId:" + id);
    console.log(data[id - 1]);
    setName(data[id - 1].name);
    setRole(data[id - 1].role);
    setAddress(data[id - 1].address);
    setCompany(data[id - 1].company);
    setUserId(data[id - 1].id);
  };
  const updateUser = () => {
    let data = { userId, name, role, address, company };
    fetch(URL + `/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((res) => {
        console.log(res);
        getList();
      });
    });
  };
  return (
    <div>
      <h1>API GET METHODS</h1>
      <table border='1' cellSpacing='0' cellPadding='0' align='center'>
        <thead>
          <tr>
            {/* <td style={{ textAlign: "left" }}>ID</td> */}
            <td style={{ textAlign: "left" }}>NAME</td>
            <td style={{ textAlign: "left" }}>ROLE</td>
            <td style={{ textAlign: "left" }}>ADDRESS</td>
            <td style={{ textAlign: "left" }}>COMPANY ID</td>
            <td style={{ textAlign: "left" }}>OPERATION</td>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 10).map((item) => (
            <tr key={item.id}>
              {/* <td style={{ textAlign: "left" }}>{item.id}</td> */}
              <td style={{ textAlign: "left" }}>{item.name}</td>
              <td style={{ textAlign: "left" }}>{item.role}</td>
              <td style={{ textAlign: "left" }}>{item.address}</td>
              <td style={{ textAlign: "left" }}>{item.company}</td>
              <td style={{ textAlign: "left" }}>
                <button onClick={() => deleteUser(item.id)}>Delete</button>
                <button onClick={() => editUser(item.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "50px" }}>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <br />
        <input
          type='text'
          placeholder='Role'
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />{" "}
        <br />
        <br />
        <input
          type='text'
          placeholder='Address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />{" "}
        <br />
        <br />
        <input
          type='text'
          placeholder='Company'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />{" "}
        <br />
        <br />
        <button onClick={updateUser}>Update User</button>
      </div>
    </div>
  );
};

export default APIGetMethods;
