import React, { Component } from "react";

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false
    };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver() {
    this.setState({ showTooltip: true });
  }
  onMouseOut() {
    this.setState({ showTooltip: false });
  }

  render() {
    const { showTooltip } = this.state;
    const { children, text } = this.props;
    return (
      <div
        className="tooltip-container"
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        {showTooltip && <div className="tooltip">{text}</div>}
        {children}
      </div>
    );
  }
}

export default Tooltip;
