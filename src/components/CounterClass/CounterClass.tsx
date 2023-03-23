import React, { Component } from "react";
import CounterClassDisplay from "./CounterClassDisplay";

type TProps = {
  [key: string]: any;
};

type TState = {
  count: number;
};

class CounterClass extends Component<TState, TProps> {
  state: TState = {
    count: 0,
  };

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrease = () => {
    if (this.state.count === 0) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div>
        <h1>CounterClass</h1>
        <CounterClassDisplay count={this.state.count} />
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default CounterClass;
