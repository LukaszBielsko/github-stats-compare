import React, { Component } from "react";

import LanguageBar from "../components/LanguageBar";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: ["All", "JS", "Ruby", "Java", "CSS", "Python"],
      currentLanguage: "All"
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(currentLanguage) {
    this.setState({ currentLanguage });
    // this.state.currentLanguage = "check"; it will mutate the state, but it will not cause rerender
  }

  render() {
    // const { languages, currentLanguage } = this.state;
    return (
      <ul className="navbar">
        <LanguageBar {...this.state} updateLanguage={this.updateLanguage} />
      </ul>
    );
  }
}

export default Navbar;
