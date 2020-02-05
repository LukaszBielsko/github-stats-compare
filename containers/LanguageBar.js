import React, { Component } from "react";

import LanguageList from "../components/LanguageList";
import RepoGrid from "../components/RepoGrid";
import { fetchRepos } from "../utils/api";
import Loader from "../components/Loader";

class LanguageBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: ["All", "JS", "Ruby", "Java", "Go", "Python"],
      currentLanguage: "All",
      repos: {}
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.currentLanguage);
  }

  updateLanguage(currentLanguage) {
    this.setState({
      currentLanguage
    });
    if (!this.state.repos[currentLanguage]) {
      fetchRepos(currentLanguage).then(languageRepos => {
        this.setState(({ repos }) => {
          // spread and create new object, not a reference to existing one
          // const updatedRepos = { ...state.repos };
          // updatedRepos[currentLanguage] = repos;
          // return { repos: updatedRepos, currentLanguage };
          // much more elegant way of doing above is siting right below
          return {
            repos: {
              ...repos,
              [currentLanguage]: languageRepos,
              currentLanguage
            }
          };
        });
      });
    } else {
      this.setState({ currentLanguage });
    }

    // this.state.currentLanguage = "state changed";
    // it will mutate the state, but it will not cause rerender
  }

  isLoading() {
    return !this.state.repos[this.state.currentLanguage];
  }

  render() {
    const { repos, currentLanguage } = this.state;
    return (
      <>
        <ul className="language-bar">
          <LanguageList {...this.state} updateLanguage={this.updateLanguage} />
        </ul>
        {this.isLoading() && <Loader />}
        {repos[currentLanguage] && <RepoGrid repos={repos[currentLanguage]} />}
      </>
    );
  }
}

export default LanguageBar;
