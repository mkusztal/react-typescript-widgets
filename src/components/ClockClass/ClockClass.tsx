import React, { Component } from "react";

type TProps = {
  [key: string]: any;
};

type TState = {
  time: Date;
};

class ClockClass extends Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);

    this.state = {
      time: new Date(),
    };
  }

  componentDidMount(): any {
    let interval = setInterval(() => this.setState({ time: new Date() }), 1000);
    return () => clearInterval(interval);
  }

  render() {
    const { time } = this.state;

    return (
      <div>
        <h1>ClockClass</h1>
        <h1>{time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default ClockClass;
