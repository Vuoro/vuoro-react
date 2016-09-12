import React, { Component } from "react";
import { Entity } from "aframe-react";

import constants from "./constants";
import Tile from "./Tile";

class Island extends Component {
  render() {
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

    let tiles = [];

    for (let x in this.props.tiles) {
      if (this.props.tiles.hasOwnProperty(x)) {
        for (let y in this.props.tiles[x]) {
          if (this.props.tiles[x].hasOwnProperty(y)) {
            let tile = this.props.tiles[x][y];
            tile.x = +x;
            tile.y = +y;
            tile.key = this.props[".key"]+ x + y ;
            tile.id = tile.key;
            tile.stats = this.props.tileStats[tile.tile];
            tiles.push(tile);
          }
        }
      }
    }

    return (
      <Entity
        id={this.props[".key"]}
        class="Island"
        position={[
          (islandPosition[0] * constants.island.width) + (islandPosition[0] * constants.island.spacing),
          0,
          (islandPosition[1] * constants.island.depth) + (islandPosition[1] * constants.island.spacing),
        ]}
      >

        {
          tiles.map((tile)=>
            <Tile
              {...tile}
            />
          )
        }

      </Entity>
    );
  }
}

export default Island;
