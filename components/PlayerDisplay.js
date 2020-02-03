import React from "react";

const PlayerDisplay = ({ player, onReset, label }) => {
  return (
    <div>
      {label}
      <img
        className="avatar-small"
        src={`https://github.com/${player}.png?size=200`}
        alt={`Avatar for ${player}`}
      />
      <a href={`https://github.com/${player}`} className="link">
        {player}
      </a>
      <button onClick={() => onReset(label)}>&times;</button>
    </div>
  );
};

export default PlayerDisplay;
