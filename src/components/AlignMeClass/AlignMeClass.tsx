import React, { Component } from "react";

type TProps = {
  [key: string]: any;
};

type TState = {
  alignment: string;
};
type TextAlign =
  | "center"
  | "end"
  | "justify"
  | "left"
  | "match-parent"
  | "right"
  | "start";

class AlignMeClass extends Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);

    this.state = {
      alignment: "left",
    };
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>AlignMeClass</h1>
        {/* <button onClick={alignmentLeft}>Left</button>
    <button onClick={alignmentCenter}>Center</button>
    <button onClick={alignmentRight}>Right</button> */}
      </div>
    );
  }
}

export default AlignMeClass;
