import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

class Island extends Component {
  render() {
    const width = 0.5;
    const height = 0.2;
    const depth = 0.7;

    const spacing = 0.1;
    let islandPosition = [0,0];

    switch (this.props[".key"]) {
      default:
      case "V":
        islandPosition = [0,0];
        break;
      case "U":
        islandPosition = [1,0];
        break;
      case "O":
        islandPosition = [2,0];
        break;
      case "R":
        islandPosition = [0,1];
        break;
      case "O2":
        islandPosition = [1,1];
        break;
    }

    return (
      <Entity
        geometry={{
          primitive: "box",
          width: width,
          height: height,
          depth: depth,
        }}
        position={[
          (islandPosition[0] * width) + (islandPosition[0] * spacing),
          0,
          (islandPosition[1] * depth) + (islandPosition[1] * spacing),
        ]}
        material={{
          color: "white",
        }}
      />
    );
  }
}

export default Island;
