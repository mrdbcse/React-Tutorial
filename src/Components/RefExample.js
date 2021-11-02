import React, { Component } from "react";

export default class RefExample extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  componentDidMount = () => {
    // console.log((this.inputRef.current.value = 10));
    console.log(this.inputRef);
  };
  getValue = () => {
    console.log(this.inputRef.current.value);
    this.inputRef.current.style.color = "red";
    this.inputRef.current.style.backgroundColor = "black";
  };
  render() {
    return (
      <div>
        <h1>Ref in React</h1>
        <input type='text' ref={this.inputRef} />
        <button onClick={() => this.getValue()}>Check Ref</button>
      </div>
    );
  }
}
