import React, { Component } from "react";

import { battle } from "../utils/api";
import Card from "../components/Card";
import Loader from "./Loader";

class FightResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      looser: null
    };
  }

  componentDidMount() {
    const { players } = this.props;
    battle(players).then(({ playerOne, playerTwo }) => {
      console.log(playerOne);
      if (playerOne.score > playerTwo.score) {
        this.setState({
          winner: playerOne,
          winnerScore: playerOne.score,
          looser: playerTwo,
          looserScore: playerTwo.score
        });
      } else {
        this.setState({
          winner: playerTwo,
          winnerScore: playerTwo.score,
          looser: playerOne,
          looserScore: playerOne.score
        });
      }
      console.log(this.state.winner);
    });
  }

  render() {
    const { winner, winnerScore, looser, looserScore } = this.state;
    const { resetFight } = this.props;
    return (
      <div>
        {winner ? (
          <>
            <div className="results">
              <Card
                avatar_url={winner.profile.avatar_url}
                login={winner.profile.login}
                html_url={winner.profile.html_url}
                header="WINNER"
              >
                <h2>Score: {winner.score}</h2>
              </Card>
              <Card
                avatar_url={looser.profile.avatar_url}
                login={looser.profile.login}
                html_url={looser.profile.html_url}
                header="LOOSER"
              >
                <h2>Score: {looser.score}</h2>
              </Card>
            </div>
            <button onClick={resetFight} className="reset">
              {" "}
              RESET{" "}
            </button>
          </>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default FightResults;
