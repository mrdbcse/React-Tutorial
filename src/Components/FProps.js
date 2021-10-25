import { useState } from "react";
const FProps = (props) => {
  console.log(props);
  const [Name, setName] = useState(props.name);
  const [Email, setEmail] = useState(props.email);
  return (
    <div>
      <h1>PROPS IN FUNCTIONAL COMPONENT</h1>
      <p style={{ textAlign: "left", margin: "0% 20%" }}>
        Hello my name is {Name}. <br /> My email address is {Email}.
      </p>
      <div style={{ margin: "0% 20%" }}>
        <button style={{ margin: "20px" }} onClick={() => setName("Debjyoti")}>
          Change Name
        </button>
        <button
          style={{ margin: "20px" }}
          onClick={() => setEmail("debjyoti@email.com")}
        >
          Change Email
        </button>
      </div>
    </div>
  );
};

export default FProps;
