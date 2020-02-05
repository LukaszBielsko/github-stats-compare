import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css"; // this wonky syntax works due to style/css loader in webpack config
import { BrowserRouter as Router, Route } from "react-router-dom";

import Fight from "./components/Fight";
import { ThemeProvider } from "./contexts/theme";
import Navbar from "./containers/Navbar";
import PopularRepos from "./containers/PopularRepos";

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
      <Router>
        <ThemeProvider value={this.state}>
          <div className={`container ${theme}`}>
            <Navbar />
            <Route path="/" exact component={PopularRepos} />
            <Route path="/fight" exact component={Fight} />
          </div>
        </ThemeProvider>
      </Router>
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
