import React from "react";
import PropTypes from "prop-types";

const LanguageNav = ({ languages, currentLanguage, updateLanguage }) => {
  return languages.map(language => (
    <li key={language}>
      <button
        className={language === currentLanguage ? "nav-btn active" : "nav-btn"}
        onClick={() => updateLanguage(language)}
      >
        {language}
      </button>
    </li>
  ));
};

LanguageNav.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentLanguage: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired
};

export default LanguageNav;
