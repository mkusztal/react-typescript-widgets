import React, { Component } from "react";

class ColorSliderClass extends Component {
  render() {
    return (
      <div>
        <h1>ColorSliderClass</h1>
        <input type="range" min="0" max="100" value="50" />
      </div>
    );
  }
}

export default ColorSliderClass;
