import React from "react";

const LanguageBar = ({ languages, currentLanguage, updateLanguage }) => {
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

export default LanguageBar;
