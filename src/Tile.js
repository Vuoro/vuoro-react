import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";
import shallowCompare from "react-addons-shallow-compare";

class Tile extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const width = 0.1;
    const height = 0.02;
    const depth = 0.1;

    return (
      <Entity
        class="Tile"
        geometry={{
          primitive: "box",
          width: width,
          height: height,
          depth: depth,
        }}
        position={[
          this.props.x * width,
          0,
          this.props.y * depth,
        ]}
        material={{
          color: this.props.tile ? "cyan" : "brown",
          flatShading: true,
        }}
      >

      </Entity>
    );
  }
}

export default Tile;
