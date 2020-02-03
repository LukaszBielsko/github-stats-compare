import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css"; // this wonky syntax works due to style/css loader in webpack config

import Navbar from "./containers/Navbar";
import Fight from "./components/Fight";

class App extends Component {
  render() {
    // JS land :)
    return (
      <div className="container">
        <Fight />
        <Navbar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

// REACT.CREATEELEMENT()

// This abstraction layer is that JSX is always going to get compiled to React.createElement invocations (typically) via Babel.

// Button is equal to Button2 basically
// function Button({ onLogin }) {
//   return React.createElement(
//     "button",
//     { id: "login-btn", onClick: onLogin },
//     "Login"
//   );
// }

// const Button2 = ({ onLogin }) => (
//   <button id="login-btn" onClick={onLogin}>
//     Login
//   </button>
// );

// console.log("button", Button({ onLogin: false }));
// console.log("button2", Button2({ onLogin: false }));
