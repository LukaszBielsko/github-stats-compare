import React, { Component } from "react";
import PlayerInput from "./PlayerInput";
import PlayerDisplay from "./PlayerDisplay";

class Fight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: null,
      playerTwo: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetPlayer = this.resetPlayer.bind(this);
  }

  // funny bussiness here, at least for me
  // this function is called in PlayerInput
  // with just one argument and here I've got two
  handleSubmit(player, username) {
    this.setState({
      [player]: username
    });
  }

  resetPlayer(player) {
    this.setState({
      [player]: null
    });
  }

  render() {
    const { playerOne, playerTwo } = this.state;
    return (
      <>
        {!playerOne ? (
          <PlayerInput
            onSubmit={username => this.handleSubmit("playerOne", username)}
            label="playerOne"
          />
        ) : (
          <PlayerDisplay
            player={playerOne}
            label="playerOne"
            onReset={player => this.resetPlayer(player)}
          />
        )}
        {!playerTwo ? (
          <PlayerInput
            onSubmit={username => this.handleSubmit("playerTwo", username)}
            label="playerTwo"
          />
        ) : (
          <PlayerDisplay
            player={playerTwo}
            label="playerTwo"
            onReset={player => this.resetPlayer(player)}
          />
        )}
      </>
    );
  }
}

export default Fight;
