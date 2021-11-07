import { useParams } from "react-router-dom";
const UserCmp = () => {
  const { id, name } = useParams();

  return (
    <div>
      <h1>User Component : {id}</h1>
      <h1>User Component's Name : {name}</h1>
    </div>
  );
};

export default UserCmp;
