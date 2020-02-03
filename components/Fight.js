import React, { Component } from "react";
import PlayerInput from "./PlayerInput";

class Fight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: null,
      playerTwo: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // funny bussiness here, at least for me
  // this function is called in PlayerInput
  // with just one argument and here I've got two
  handleSubmit(player, username) {
    this.setState({
      [player]: username
    });
  }

  render() {
    const { playerOne, playerTwo } = this.state;
    return (
      <>
        {!playerOne && (
          <PlayerInput
            onSubmit={username => this.handleSubmit("playerOne", username)}
          />
        )}
        {!playerTwo && (
          <PlayerInput
            onSubmit={username => this.handleSubmit("playerTwo", username)}
          />
        )}
      </>
    );
  }
}

export default Fight;
