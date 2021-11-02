import "./App.css";
import ControlledComponent from "./Components/ControlledComponent";
import FwdRef from "./Components/FwdRef";
import UncontrolledComponents from "./Components/UncontrolledComponents";
import UseRefExample from "./Components/UseRefExample";
// import UseMemoExample from "./Components/UseMemoExample";
// import Bootstrap from "./Components/Bootstrap";
// import Map from "./Components/Map";
// import Styles from "./Components/Styles";
// import Hooks from "./Components/Hooks";
// import APIPostMethods from "./Components/APIPostMethods";
// import APIGetMethods from "./Components/APIGetMethods";
// import AllAPIMethods from "./Components/AllAPIMethods";
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
      {/* <APIPostMethods /> */}
      {/* <APIGetMethods /> */}
      {/* <AllAPIMethods /> */}
      {/* <Hooks /> */}
      {/* <Styles /> */}
      {/* <Bootstrap /> */}
      {/* <Map /> */}
      {/* <UseMemoExample /> */}
      {/* <UseRefExample /> */}
      {/* <FwdRef /> */}
      {/* <ControlledComponent /> */}
      <UncontrolledComponents />
    </div>
  );
};

export default App;

// import React, { Component } from "react";
// // import LifeCycleMethods from "./Components/LifeCycleMethods";
// // import PureComponentExample from "./Components/PureComponent";
// import RefExample from "./Components/RefExample";

// export default class App extends Component {
//   // constructor() {
//   //   super();
//   //   console.log("Inside Constructor");
//   //   this.state = {
//   //     name: "Debjyoti",
//   //   };
//   // }
//   // changeName = () => {
//   //   this.setState({
//   //     name: "Amit",
//   //   });
//   // };
//   render() {
//     console.log("Inside Render Method in App.js");
//     return (
//       <div className='App'>
//         {/* <CState /> */}
//         {/* <CProps name={this.state.name} role='SDT' /> */}
//         {/* <button onClick={() => this.changeName()}>Change Name</button> */}
//         {/* <LifeCycleMethods /> */}
//         {/* <PureComponentExample /> */}
//         <RefExample />
//       </div>
//     );
//   }
// }
