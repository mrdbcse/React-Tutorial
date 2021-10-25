import React, { Component } from "react";

export default class CState extends Component {
  constructor() {
    super();
    this.state = {
      Name: "Anil",
    };
  }
  updateName = () => {
    this.setState({ Name: "Sidhu" });
  };
  resetName = () => {
    this.setState({ Name: "Anil" });
  };
  render() {
    return (
      <div>
        <h1>STATE IN CLASS COMPONENT</h1>
        <h1> {this.state.Name} </h1>
        <button style={{ margin: "20px" }} onClick={() => this.updateName()}>
          Change Name
        </button>
        <button style={{ margin: "20px" }} onClick={() => this.resetName()}>
          Reset Name
        </button>
      </div>
    );
  }
}
