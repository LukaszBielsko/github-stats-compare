import React from "react";

import { ThemeConsumer } from "../contexts/theme";

function Navbar() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <button onClick={toggleTheme}>🍓{theme}🍐</button>
      )}
    </ThemeConsumer>
  );
}

export default Navbar;
