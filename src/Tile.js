import React, { Component } from "react";
import { Entity } from "aframe-react";
import { Motion, spring } from 'react-motion';
// import throttle from "lodash.throttle";
import shallowCompare from "react-addons-shallow-compare";

import constants from "./constants";

class Tile extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   isHovered: false,
    // }

    // this.setHovered = throttle(function () {
    //   this.props.setHoveredTile(this.props.id);
    // }, 100);
    //
    // this.unsetHovered = throttle(function () {
    //   this.props.setHoveredTile(null);
    // }, 100);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

    }
  }

    }
  }

  render() {
    return (
      <Entity
        className="tile interactable"
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
