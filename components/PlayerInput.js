import React, { Component } from "react";

class PlayerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isBtnDisabled: true
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  }

  handleInput(e) {
    this.setState({ username: e.target.value, isBtnDisabled: false });
    if (!e.target.value) {
      this.setState({ isBtnDisabled: true });
    }
  }

  render() {
    const { isBtnDisabled, username } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          onChange={this.handleInput}
          value={username}
          placeholder="github username"
        ></input>
        <button type="submit" disabled={isBtnDisabled}>
          submit
        </button>
      </form>
    );
  }
}

export default PlayerInput;
