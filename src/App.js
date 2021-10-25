// import "./App.css";
import CProps from "./Components/CProps";
// // import FProps from "./Components/FProps";
// // import CState from "./Components/CState";
// // import FState from "./Components/FState";

// const App = () => {
//   return (
//     <div className='App'>
//       {/* <FState /> */}
//       {/* <FProps name="Anil" email="anil@email.com" /> */}
//       {/* <FProps name="Bimal" email="bimal@email.com" /> */}
//       {/* <div>
//         <button onClick={() => this.changeName()}>Change Name</button>
//       </div> */}
//     </div>
//   );
// };

// export default App;

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Debjyoti",
    };
  }
  changeName = () => {
    this.setState({
      name: "Amit",
    });
  };
  render() {
    return (
      <div>
        <div>
          {/* <CState /> */}
          <CProps name={this.state.name} role='SDT' />
          <button onClick={() => this.changeName()}>Change Name</button>
        </div>
      </div>
    );
  }
}
