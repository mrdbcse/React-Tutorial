import { useEffect, useState } from "react";
const APIGetMethods = () => {
  const [data, setData] = useState([]);
  const URL = "http://localhost:3000/users";
  //   ------- FETCH API GET METHOD -----------------
  useEffect(() => {
    fetch(URL).then((data) => {
      data.json().then((res) => {
        setData(res);
      });
    });
  }, []);
  console.log(data);

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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default APIGetMethods;
