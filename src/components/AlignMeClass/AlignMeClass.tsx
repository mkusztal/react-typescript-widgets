import React, { Component } from "react";

type TProps = {
  [key: string]: any;
};

type TextAlign =
  | "center"
  | "end"
  | "justify"
  | "left"
  | "match-parent"
  | "right"
  | "start";

type TState = {
  alignment: TextAlign;
};

class AlignMeClass extends Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);

    this.state = {
      alignment: "left",
    };
  }

  alignmentLeft = () => {
    this.setState({ alignment: "left" });
  };
  alignmentCenter = () => {
    this.setState({ alignment: "center" });
  };
  alignmentRight = () => {
    this.setState({ alignment: "right" });
  };

  render() {
    const { alignment } = this.state;

    return (
      <div>
        <h1 style={{ textAlign: alignment }}>AlignMeClass</h1>
        <button onClick={this.alignmentLeft}>Left</button>
        <button onClick={this.alignmentCenter}>Center</button>
        <button onClick={this.alignmentRight}>Right</button>
      </div>
    );
  }
}

export default AlignMeClass;
