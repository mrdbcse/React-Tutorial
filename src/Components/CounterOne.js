import React, { Component, PureComponent } from "react";

export default class CounterOne extends PureComponent {
  render() {
    console.log("Rerendering from Counter.js");
    return (
      <div>
        <h1>Counter Component {this.props.count}</h1>
      </div>
    );
  }
}
