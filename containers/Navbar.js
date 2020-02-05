import React from "react";
import { NavLink } from "react-router-dom";

import { ThemeConsumer } from "../contexts/theme";

const activeStyle = {
  color: "green"
};

function Navbar() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="navbar">
          <ul>
            <li>
              <NavLink activeStyle={activeStyle} exact to="/">
                Popular Repos
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} to="/fight">
                Github Fight
              </NavLink>
            </li>
          </ul>
          <button onClick={toggleTheme}>🍓{theme}🍐</button>
        </nav>
      )}
    </ThemeConsumer>
  );
}

export default Navbar;
