import { commonContext } from "./CommonContext";

const UpdateButton = () => {
  return (
    <div>
      <commonContext.Consumer>
        {({ updateColor }) => (
          <>
            <button onClick={() => updateColor("yellow")}>Update Color</button>
            <button onClick={() => updateColor("blue")}>Update Color</button>
          </>
        )}
      </commonContext.Consumer>
    </div>
  );
};

export default UpdateButton;
