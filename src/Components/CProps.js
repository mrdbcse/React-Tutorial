import React, { Component } from "react";

export default class CProps extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>PROPS IN CLASS COMPONENT</h1>
        <p style={{ margin: "0% 20%", textAlign: "left" }}>
          Hello, I am {this.props.name} <br /> I am a {this.props.role}
        </p>
      </div>
    );
  }
}
