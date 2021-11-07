import { Link } from "react-router-dom";

const UserList = () => {
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
      <h1>Dynamic Routing</h1>
      {userData.map((data, i) => (
        <span key={i}>
          <Link to={"/user/" + data.id + "/" + data.name}>
            {data.name} <br />{" "}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default UserList;
