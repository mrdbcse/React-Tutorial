import React, { Component } from "react";
import { commonContext } from "./CommonContext";
import Core from "./Core";
import UpdateButton from "./UpdateButton";

export default class Main extends Component {
  constructor() {
    super();
    this.updateColor = (color) => {
      this.setState({
        color: color,
      });
    };
    this.state = {
      color: "green",
      updateColor: this.updateColor,
    };
  }
  render() {
    return (
      <div>
        <commonContext.Provider value={this.state}>
          <h1>Context API</h1>
          <Core />
          <UpdateButton />
        </commonContext.Provider>
      </div>
    );
  }
}
