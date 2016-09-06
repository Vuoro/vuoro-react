import React, { Component } from "react";
import { Entity } from "aframe-react";
import shallowCompare from "react-addons-shallow-compare";

import constants from "./constants";

class Tile extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <Entity
        class="Tile"
        geometry={{
          primitive: "box",
          width: constants.tile.width,
          height: constants.tile.height,
          depth: constants.tile.depth,
        }}
        position={[
          this.props.x * constants.tile.width,
          0,
          -this.props.y * constants.tile.depth,
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
