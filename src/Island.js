import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

import Tile from "./Tile";

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
        islandPosition = [0,-1];
        break;
      case "O2":
        islandPosition = [1,-1];
        break;
    }

    let tiles = [];

    for (let x in this.props.tiles) {
      for (let y in this.props.tiles[x]) {
        let tile = this.props.tiles[x][y];
        tile.x = +x;
        tile.y = +y;
        tile.key = x+y;
        tiles.push(tile);
      }
    }

    return (
      <Entity
        id={this.props[".key"]}
        class="Island"
        position={[
          (islandPosition[0] * width) + (islandPosition[0] * spacing),
          0,
          (islandPosition[1] * depth) + (islandPosition[1] * spacing),
        ]}
      >

        {
          tiles.map((tile)=>
            <Tile {...tile} />
          )
        }

      </Entity>
    );
  }
}

export default Island;
