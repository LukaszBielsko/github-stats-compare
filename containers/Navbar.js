import React, { Component } from "react";

import LanguageNav from "../components/LanguageNav";
import fetchRepos from "../utils/api";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: ["All", "JS", "Ruby", "Java", "Go", "Python"],
      currentLanguage: "All",
      repos: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    // fetch repos for all languages
    fetchRepos(this.state.currentLanguage).then(repos => {
      this.setState({ repos });
    });
  }

  updateLanguage(currentLanguage) {
    fetchRepos(currentLanguage).then(repos => {
      this.setState({ repos, currentLanguage });
    });
    // this.state.currentLanguage = "state changed";
    // it will mutate the state, but it will not cause rerender
  }

  render() {
    const { repos } = this.state;
    return (
      <>
        <ul className="navbar">
          <LanguageNav {...this.state} updateLanguage={this.updateLanguage} />
        </ul>
        {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
      </>
    );
  }
}

export default Navbar;
