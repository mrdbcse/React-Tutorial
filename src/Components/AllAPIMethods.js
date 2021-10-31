import { useEffect, useState } from "react";

const AllAPIMethods = () => {
  const URL = "http://localhost:3000/users";
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const [addUser, setAddUser] = useState(false);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  // console.log("Users: ", users);
  // ----------------------GET METHODS---------------------
  const getData = () => {
    fetch(URL).then((result) => {
      result.json().then((res) => {
        setUsers(res);
        console.log("Response from getData:", res);
      });
    });
  };
  // ----------------------POST METHODS---------------------
  const createUser = (e) => {
    try {
      e.preventDefault();
      console.log("Name:", name);
      console.log("Role:", role);
      console.log("Address:", address);
      console.log("Company:", company);
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
        result.json().then((res) => {
          console.log("Response from createUser:", res);
        });
        getData();
        setName("");
        setRole("");
        setAddress("");
        setCompany("");
      });
      alert("User Created!");
    } catch (error) {
      alert("Error:", error);
    }
  };
  // -------------------Filling the from on button Click---------------------
  const editUser = (id) => {
    console.log("Data from editUser:", users);
    console.log(users[id - 1]);
    setName(users[id - 1].name);
    setRole(users[id - 1].role);
    setAddress(users[id - 1].address);
    setCompany(users[id - 1].company);
    setUserId(id);
  };
  // ----------------------PUT METHODS---------------------
  const UpdateUser = () => {
    try {
      console.log("UpdateUser button clicked!");
      let userData = { userId, name, role, address, company };
      fetch(URL + `/${userId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }).then((result) => {
        result.json().then((res) => {
          console.log("Response from UpdateUser:", res);
          getData();
          setName("");
          setRole("");
          setAddress("");
          setCompany("");
        });
      });
    } catch (error) {
      alert("Error:", error);
    }
  };
  // ----------------------DELETE METHODS---------------------
  const deleteUser = (id) => {
    fetch(URL + `/${id}`, { method: "DELETE" }).then((result) => {
      result.json().then((res) => {
        console.log("Response from deleteUser:", res);
        getData();
      });
    });
    alert(`User ${id} deleted successfully!`);
  };
  return (
    <>
      <div className='getMethod'>
        <h1>User Details</h1>
        <table border='1'>
          <thead>
            <tr>
              <th width='20%' style={{ textAlign: "center" }}>
                Name
              </th>
              <th width='20%' style={{ textAlign: "center" }}>
                Role
              </th>
              <th width='20%' style={{ textAlign: "center" }}>
                Address
              </th>
              <th width='20%' style={{ textAlign: "center" }}>
                Company
              </th>
              <th width='20%' style={{ textAlign: "center" }}>
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((data) => (
              <tr key={data.id}>
                <td width='20%' style={{ textAlign: "center" }}>
                  {data.name}
                </td>
                <td width='20%' style={{ textAlign: "center" }}>
                  {data.role}
                </td>
                <td width='20%' style={{ textAlign: "center" }}>
                  {data.address}
                </td>
                <td width='20%' style={{ textAlign: "center" }}>
                  {data.company}
                </td>
                <td width='20%' style={{ textAlign: "center" }}>
                  <button onClick={() => editUser(data.id)}>Edit</button>
                  <button onClick={() => deleteUser(data.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: "50px" }}>
        <button
          type='button'
          style={{ margin: "10px" }}
          onClick={() => {
            setAddUser(true);
          }}
        >
          Create User
        </button>
        <button
          type='button'
          style={{ marginLeft: "10px" }}
          onClick={() => {
            setAddUser(false);
          }}
        >
          Edit User
        </button>
        {addUser ? (
          <div className='postMethod'>
            <h1>Create User</h1>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>
                    <input
                      type='text'
                      name='name'
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />{" "}
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>Role</td>
                  <td>:</td>
                  <td>
                    <input
                      type='text'
                      name='role'
                      value={role}
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
                    />{" "}
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>:</td>
                  <td>
                    <input
                      type='text'
                      name='address'
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />{" "}
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>Comapny</td>
                  <td>:</td>
                  <td>
                    <input
                      type='text'
                      name='company'
                      value={company}
                      onChange={(e) => {
                        setCompany(e.target.value);
                      }}
                    />{" "}
                    <br />
                  </td>
                </tr>
                <tr>
                  <td style={{ alignItems: "center" }}>
                    <button type='button' onClick={createUser}>
                      Add User
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className='putMethod'>
            <h1>Edit User</h1>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>
                    <input
                      type='text'
                      name='name'
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />{" "}
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>Role</td>
                  <td>:</td>
                  <td>
                    <input
                      type='text'
                      name='role'
                      value={role}
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
                    />{" "}
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>:</td>
                  <td>
                    <input
                      type='text'
                      name='address'
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />{" "}
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>Comapny</td>
                  <td>:</td>
                  <td>
                    <input
                      type='text'
                      name='company'
                      value={company}
                      onChange={(e) => {
                        setCompany(e.target.value);
                      }}
                    />{" "}
                    <br />
                  </td>
                </tr>
                <tr>
                  <td style={{ alignItems: "center" }}>
                    <button type='button' onClick={UpdateUser}>
                      Update User
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default AllAPIMethods;
