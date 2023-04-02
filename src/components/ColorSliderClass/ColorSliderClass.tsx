import React, { Component } from "react";

type TProps = {
  [key: string]: any;
};

type TState = {
  red: number;
  green: number;
  blue: number;
};

class ColorSliderClass extends Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);

    this.state = {
      red: 0,
      green: 0,
      blue: 0,
    };
  }
  render() {
    const { red, green, blue } = this.state;
    return (
      <div>
        <h1>ColorSliderClass</h1>
        <div
          style={{
            height: 50,
            width: 50,
            background: `rgb(${red}, ${green}, ${blue})`,
          }}
        />

        <input
          type="range"
          min="0"
          max="255"
          value={red}
          onChange={(event) =>
            this.setState({ red: parseInt(event.target.value) })
          }
        />

        <input
          type="range"
          min="0"
          max="255"
          value={green}
          onChange={(event) =>
            this.setState({ green: parseInt(event.target.value) })
          }
        />

        <input
          type="range"
          min="0"
          max="255"
          value={blue}
          onChange={(event) =>
            this.setState({ blue: parseInt(event.target.value) })
          }
        />
      </div>
    );
  }
}

export default ColorSliderClass;
