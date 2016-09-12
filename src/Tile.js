import React, { Component } from "react";
import { Entity } from "aframe-react";
import shallowCompare from "react-addons-shallow-compare";

import constants from "./constants";

class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  onStateAdded(event) {
    switch (event.detail.state) {
      case "cursor-hovered":
      default:
        this.setState({focused: true});
    }
  }

  onStateRemoved(event) {
    switch (event.detail.state) {
      case "cursor-hovered":
      default:
        this.setState({focused: false});
    }
  }

  render() {
    let reticle;

    if (this.state.focused) {
      reticle = (
        <Entity
          className="reticle"
          geometry={{
            primitive: "box",
            width: constants.tile.width,
            height: constants.tile.height,
            depth: constants.tile.depth,
          }}
          position={[
            0,
            constants.tile.height * 0.5,
            0,
          ]}
          material={{
            color: "yellow",
            flatShading: true,
          }}
        />
      );
    }

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
        onStateAdded={this.onStateAdded.bind(this)}
        onStateRemoved={this.onStateRemoved.bind(this)}
      >

        {reticle}

      </Entity>
    );
  }
}

export default Tile;
