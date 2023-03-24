import React, { Component } from "react";

type TState = {
  show: boolean;
};

class ToggleClass extends Component<TState> {
  state: TState = {
    show: false,
  };

  handleToggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <h1>ToggleClass</h1>
        <p>{this.state.show ? "Hello" : ""}</p>
        <button onClick={this.handleToggle}>
          {this.state.show ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default ToggleClass;
