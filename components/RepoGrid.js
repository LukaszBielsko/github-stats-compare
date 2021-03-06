import React from "react";
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle
} from "react-icons/fa";

import Card from "./Card";
import Tooltip from "./Tooltip";

const RepoGrid = ({ repos }) => {
  return (
    <ul className="grid space-around">
      {repos.map((repo, index) => {
        const {
          name,
          owner,
          html_url,
          stargazers_count,
          forks,
          open_issues
        } = repo;
        const { login, avatar_url } = owner;

        return (
          <li key={html_url}>
            <ul className="card-list">
              <Card
                header={`#${index + 1}`}
                avatar_url={avatar_url}
                login={login}
                html_url={html_url}
              >
                <Tooltip text="Stars count">
                  <li>
                    <FaStar color="rgb(255, 215, 0)" size={22} />
                    {stargazers_count.toLocaleString()} stars
                  </li>
                </Tooltip>
                <Tooltip text="Forks">
                  <li>
                    <FaCodeBranch color="rgb(129, 195, 245)" size={22} />
                    {forks.toLocaleString()} forks
                  </li>
                </Tooltip>
                <Tooltip text="Open issues">
                  <li>
                    <FaExclamationTriangle
                      color="rgb(241, 138, 147)"
                      size={22}
                    />
                    {open_issues.toLocaleString()} open
                  </li>
                </Tooltip>
              </Card>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default RepoGrid;
