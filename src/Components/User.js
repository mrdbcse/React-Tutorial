const User = () => {
  let Name = "Debjyoti";
  const methodCall = () => {
    alert(Name);
    console.log("Button Clicked!");
  };
  return (
    <div>
      <button onClick={methodCall}>Click Me!!</button>
    </div>
  );
};

export default User;
