import { Table } from "react-bootstrap";

const Map = () => {
  const userData = [
    {
      userId: 1,
      name: "Arindam Mondal",
      role: "SDE",
      address: [
        { hn: 10, city: "Bangalore", country: "India" },
        { hn: 11, city: "Mumbai", country: "India" },
        { hn: 12, city: "Kolkata", country: "India" },
      ],
      company: "Microsoft",
      id: 1,
    },
    {
      userId: 2,
      name: "Mahesh Sharma",
      role: "SDE-II",
      address: [
        { hn: 13, city: "Bangalore", country: "India" },
        { hn: 14, city: "Mumbai", country: "India" },
        { hn: 15, city: "Kolkata", country: "India" },
      ],
      company: "Amazon Inc",
      id: 2,
    },
    {
      userId: 3,
      name: "Debjyoti Banerjee",
      role: "SDT",
      address: [
        { hn: 16, city: "Bangalore", country: "India" },
        { hn: 17, city: "Mumbai", country: "India" },
        { hn: 18, city: "Kolkata", country: "India" },
      ],
      company: "Google",
      id: 3,
    },
  ];
  return (
    <div>
      <Table responsive striped bordered variant='dark'>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((data, id) => (
            <tr key={id}>
              <td>{id + 1}</td>
              <td>{data.name}</td>
              <td>
                <Table responsive striped bordered hover variant='dark'>
                  <thead>
                    <tr>
                      <td>Id</td>
                      <td>House No</td>
                      <td>City</td>
                      <td>Country</td>
                    </tr>
                  </thead>
                  <tbody>
                    {data.address.map((data, id) => (
                      <tr key={id}>
                        <td>{id + 1}</td>
                        <td>{data.hn}</td>
                        <td>{data.city}</td>
                        <td>{data.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Map;
