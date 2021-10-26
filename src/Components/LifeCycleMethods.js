import React, { Component } from "react";
import Counter from "./Counter";

export default class LifeCycleMethods extends Component {
  constructor() {
    super();
    console.log("Inside Constructor in LifeCycleMethods.js");
    this.state = {
      name: "Debjyoti",
      show: true,
    };
  }
  componentDidMount = () => {
    console.log("Inside componentDidMount Method in LifeCycleMethods.js");
  };
  shouldComponentUpdate = () => {
    console.log("Inside shouldComponentUpdate Method in LifeCycleMethods.js");
    return true;
    // if return statement is true then componentDidUpdate method is invoked
    // else componentDidUpdate method will not invoked
  };
  componentDidUpdate = (prevProps, prevState, snapShot) => {
    console.log("Inside componentDidUpdate Method in LifeCycleMethods.js");
    console.log("Previous State:" + prevState.name);
    // if (prevState.name === this.state.name) {
    //   alert("Data is already same!!!");
    // }
    console.log("Snapshot:" + snapShot);
  };
  changeName = () => {
    this.setState({
      name: "Amit",
    });
  };
  render() {
    console.log("Inside Render Method in LifeCycleMethods.js");
    return (
      <div>
        {/* <h1>LIFE CYCLE METHODS</h1> */}
        <h1>Hello {this.state.name}</h1>
        <button onClick={() => this.changeName()}>Change Name</button>
        {this.state.show ? <Counter /> : <h1>LIFE CYCLE METHODS</h1>}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle
        </button>
        {console.log(
          "Inside return statement of render method in LifeCycleMethods.js "
        )}
      </div>
    );
  }
}
