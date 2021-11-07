import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Welcome to React Tutorial for Beginners</h1>
      <nav>
        <ul>
          <li style={{ textAlign: "left" }}>
            <Link to='/allApiMethods'>All API Methods</Link>
          </li>
          <li style={{ textAlign: "left" }}>
            <Link to='/hoc'>Higher Order Components</Link>
          </li>
          <li style={{ textAlign: "left" }}>
            <Link to='/apiGetMethod'>API Get Method</Link>
          </li>
          <li style={{ textAlign: "left" }}>
            <Link to='/apiPostMethod'>API Post Method</Link>
          </li>
          <li style={{ textAlign: "left" }}>
            <Link to='/hooks'>Hooks</Link>
          </li>
          <li style={{ textAlign: "left" }}>
            <Link to='/dynamicRouting'>Dynamic Routing</Link>
          </li>
          <li style={{ textAlign: "left" }}>
            <Link to='/previousProps'>Previous Props</Link>
          </li>
          <li style={{ textAlign: "left" }}>
            <Link to='/stateWithObject'>State with Object</Link>
          </li>
          <li style={{ textAlign: "left" }}>
            <Link to='/contextApi'>Context API</Link>
          </li>
        </ul>
        <h6>More contents comming soon..........</h6>
      </nav>
    </div>
  );
};
