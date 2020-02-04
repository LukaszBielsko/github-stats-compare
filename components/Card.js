import React from "react";

import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle
} from "react-icons/fa";

const Card = ({ avatar_url, login, html_url, header, children }) => {
  return (
    <div className="repo bg-light">
      <h4 className="header-lg center-text">{header}</h4>
      <img className="avatar" src={avatar_url} alt={`Avatar for ${login}`} />
      <h2 className="center-text">
        <a className="link" href={html_url}>
          {login}
        </a>
      </h2>
      <ul className="card-list">
        <li>
          <FaUser color="rgb(255, 191, 116)" size={22} />
          <a href={`https://github.com/${login}`}>{login}</a>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Card;
