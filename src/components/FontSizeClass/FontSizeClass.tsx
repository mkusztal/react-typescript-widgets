import React, { Component } from "react";

type TProps = {
  [key: string]: any;
};

type TState = {
  size: number;
};

class FontSizeClass extends Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);

    this.state = {
      size: 20,
    };
  }

  increaseSize = () => {
    this.setState({
      size: this.state.size + 5,
    });
  };

  decreaseSize = () => {
    this.setState({
      size: this.state.size - 5,
    });
  };

  render() {
    return (
      <div>
        <h1>FontSizerFunc</h1>
        <button onClick={this.increaseSize}>Grown</button>
        <button onClick={this.decreaseSize}>Shrink</button>
        <p style={{ fontSize: `${this.state.size}px` }}>{this.state.size}px</p>
      </div>
    );
  }
}

export default FontSizeClass;
