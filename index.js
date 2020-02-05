import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css"; // this wonky syntax works due to style/css loader in webpack config

import LanguageBar from "./containers/LanguageBar";
import Fight from "./components/Fight";
import { ThemeProvider } from "./contexts/theme";
import Navbar from "./containers/Navbar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light",
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === "light" ? "purple" : "light"
        }));
      }
    };
  }

  render() {
    // JS land :)
    const { theme } = this.state;
    return (
      // babel land :)
      <ThemeProvider value={this.state}>
        <div className={`container ${theme}`}>
          <Fight />
          <Navbar />
          <LanguageBar />
        </div>
      </ThemeProvider>
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
