import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    console.log("Inside constructor in  Counter.js");
  }
  componentWillUnmount = () => {
    console.log("Inside componentWillUnmount Method in Counter.js");
  };
  render() {
    return <h1>Counter Component</h1>;
  }
}
