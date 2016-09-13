import React, { Component } from "react";
import { Entity } from "aframe-react";
import { Motion, spring } from 'react-motion';
import shallowCompare from "react-addons-shallow-compare";
import seedrandom from "seedrandom";

import constants from "./constants";

class Tile extends Component {
  constructor(props) {
    super(props);

    this.random = seedrandom(this.props.id);
    this.tileLocations = this.shuffleArray(constants.tile.getGrid());

    this.getModel = this.getModel.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  // onStateAdded(event) {
  //   switch (event.detail.state) {
  //     case "cursor-hovered":
  //     default:
  //       // this.setHovered();
  //   }
  // }
  //
  // onStateRemoved(event) {
  //   switch (event.detail.state) {
  //     case "cursor-hovered":
  //     default:
  //       // this.unsetHovered();
  //   }
  // }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(this.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  getModel() {
    if (this.props.stats) {

      return [...Array(this.props.health)].map((x, i) =>
        <Entity
          key={this.props.tile + "-model-" + i}
          position={[
            constants.tile.width  / constants.tile.gridSize * this.tileLocations[i][0] - constants.tile.width * 0.5,
            constants.tile.height * 0.5,
            constants.tile.depth  / constants.tile.gridSize * this.tileLocations[i][1] - constants.tile.depth * 0.5,
          ]}
          geometry={{
            primitive: "box",
            width:  constants.tile.width / constants.tile.gridSize,
            height: constants.tile.width / constants.tile.gridSize,
            depth:  constants.tile.depth / constants.tile.gridSize,
          }}
          material={{
            color: "blue",
            flatShading: true,
          }}
        />
      )
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
          color: this.props.tile ? "green" : "brown",
          flatShading: true,
        }}
        // onStateAdded={this.onStateAdded.bind(this)}
        // onStateRemoved={this.onStateRemoved.bind(this)}
      >

        {this.getModel()}

      </Entity>
    );
  }
}

export default Tile;
