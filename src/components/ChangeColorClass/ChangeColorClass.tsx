import React, { Component } from "react";

type TProps = {
  [key: string]: any;
};

type TState = {
  text: string;
  color: string;
};

class ChangeColorClass extends Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);

    this.state = {
      text: "",
      color: "black",
    };
  }

  changeColor = () => {
    this.setState({ color: this.state.text });
  };
  render() {
    const { text, color } = this.state;
    return (
      <div>
        <h1>ChangeColorClass</h1>
        <input
          type="text"
          placeholder="color"
          value={text}
          onChange={(event) => {
            this.setState({ text: event.target.value });
          }}
        />
        <button onClick={this.changeColor}>Change</button>
        <h1 style={{ color }}>{color}</h1>
      </div>
    );
  }
}

export default ChangeColorClass;
