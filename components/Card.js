import React from "react";

import Tooltip from "../components/Tooltip";

const Card = ({ avatar_url, login, html_url, header, children }) => {
  return (
    <div className="repo bg-light">
      <h4 className="header-lg center-text">{header}</h4>
      <img className="avatar" src={avatar_url} alt={`Avatar for ${login}`} />
      <h2 className="center-text">
        <Tooltip text="Click for github page">
          <a className="link" href={html_url}>
            {login}
          </a>
        </Tooltip>
      </h2>
      <ul className="card-list"></ul>
      {children}
    </div>
  );
};

export default Card;
