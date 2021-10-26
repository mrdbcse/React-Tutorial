const FuncAsProps = (props) => {
  return (
    <div>
      <h1>FUNCTION AS PROPS</h1>
      <button onClick={props.data}>Click Me</button>
    </div>
  );
};

export default FuncAsProps;
