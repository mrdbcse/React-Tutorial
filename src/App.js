import "./App.css";
// import FuncAsProps from "./Components/FuncAsProps";
// import BasicFormValidation from "./Components/BasicFormValidation";
// import ConditionalRendering from "./Components/ConditionalRendering";
// import HandleForm from "./Components/HandleForm";
// import HideShow from "./Components/HideShow";
// import User from "./Components/User";
// import CProps from "./Components/CProps";
// import FProps from "./Components/FProps";
// import CState from "./Components/CState";
// import FState from "./Components/FState";

const App = () => {
  // const getData = () => {
  //   console.log("Function from App.js");
  // };
  return (
    <div className='App'>
      {/* <FState /> */}
      {/* <FProps name="Anil" email="anil@email.com" /> */}
      {/* <FProps name="Bimal" email="bimal@email.com" /> */}
      {/* <User /> */}
      {/* <HideShow /> */}
      {/* <HandleForm /> */}
      {/* <ConditionalRendering /> */}
      {/* <BasicFormValidation /> */}
      {/* <FuncAsProps data={getData} /> */}
    </div>
  );
};

export default App;

// import React, { Component } from "react";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Debjyoti",
//     };
//   }
//   changeName = () => {
//     this.setState({
//       name: "Amit",
//     });
//   };
//   render() {
//     return (
//       <div>
//         <div>
//           {/* <CState /> */}
//           <CProps name={this.state.name} role='SDT' />
//           <button onClick={() => this.changeName()}>Change Name</button>
//         </div>
//       </div>
//     );
//   }
// }
