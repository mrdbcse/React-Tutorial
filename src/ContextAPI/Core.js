import { commonContext } from "./CommonContext";

const Core = () => {
  return (
    <div>
      <commonContext.Consumer>
        {({ color }) => (
          <h1 style={{ backgroundColor: color }}>Hello this is Core.js Page</h1>
        )}
      </commonContext.Consumer>
    </div>
  );
};

export default Core;
