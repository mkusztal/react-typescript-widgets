import React, { Component } from "react";

type Props = {
  count?: number;
};

class CountClassDisplay extends Component<Props> {
  static defaultProps: Props = {
    count: 0,
  };
  render() {
    return <div>{this.props.count}</div>;
  }
}

export default CountClassDisplay;
