import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Welcome to React Tutorial for Beginners</h1>
      <nav>
        <ul>
          <li style={{ textAlign: "left" }}>
            <Link to='/allapimethods'>All API Methods</Link>
          </li>
          <li style={{ textAlign: "left" }}>
            <Link to='/hoc'>Higher Order Components</Link>
          </li>
          <li style={{ textAlign: "left" }}>
            <Link to='/apigetmethods'>API Get Method</Link>
          </li>
          <li style={{ textAlign: "left" }}>
            <Link to='/apipostmethods'>API Post Method</Link>
          </li>
          <li style={{ textAlign: "left" }}>
            <Link to='/hooks'>Hooks</Link>
          </li>
        </ul>
        <h6>More contents comming soon..........</h6>
      </nav>
    </div>
  );
};
