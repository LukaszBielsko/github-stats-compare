import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languges: ["All", "JS", "Ruby", "Java", "CSS", "Python"],
      currentLanguage: "All"
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(currentLanguage) {
    this.setState({ currentLanguage });
    // this.state.currentLanguage = "check"; it will mutate the state, but it will not cause rerender
  }

  render() {
    const { languges, currentLanguage } = this.state;
    return (
      <ul className="navbar">
        {languges.map(language => (
          <li>
            <button
              // className="nav-btn"
              className={
                language === currentLanguage ? "nav-btn active" : "nav-btn"
              }
              onClick={() => this.updateLanguage(language)}
            >
              {language}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Navbar;
