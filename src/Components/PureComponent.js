import React, { Component, PureComponent } from "react";
import CounterOne from "./CounterOne";

export default class PureComponentExample extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    // console.log("Rerendering");
    return (
      <div>
        <CounterOne count={this.state.count} />
        <button onClick={() => this.setState({ count: 1 })}>Click Me</button>
        {/* <button onClick={() => this.setState({ count: this.state.count })}>
          Click Me
        </button> */}
      </div>
    );
  }
}
