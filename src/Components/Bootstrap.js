import { Alert } from "react-bootstrap";
const Bootstrap = () => {
  return (
    <div>
      <h1>Bootstarp</h1>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </div>
  );
};

export default Bootstrap;
