import React, { Component } from "react";

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "...LOADING..."
    };
  }

  componentDidMount() {
    const { speed } = this.props;
    this.interval = window.setInterval(() => {
      console.log("interval");
      this.state.content === "...LOADING..."
        ? this.setState({ content: "...LOAD" })
        : this.setState(({ content }) => ({ content: content + "ING..." }));
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    const { content } = this.state;
    return <div>{content}</div>;
  }
}

Loader.defaultProps = {
  speed: 300
};

export default Loader;
