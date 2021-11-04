const Hoc = (props) => {
  return (
    <div>
      <h1>Higher Order Components</h1>
      <div
        style={{
          backgroundColor: "rebeccapurple",
          width: "100px",
          margin: "5px",
        }}
      >
        <props.cmp />
      </div>
      <div
        style={{
          backgroundColor: "rebeccapurple",
          width: "100px",
          margin: "5px",
        }}
      >
        <props.cmp />
      </div>
      <div
        style={{
          backgroundColor: "rebeccapurple",
          width: "100px",
          margin: "5px",
        }}
      >
        <props.cmp />
      </div>
    </div>
  );
};

export default Hoc;
