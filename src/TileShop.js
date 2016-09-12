import React, { Component } from "react";
import { Entity } from "aframe-react";
// import shallowCompare from "react-addons-shallow-compare";

import constants from "./constants";
import Tile from "./Tile";

class TileShop extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return shallowCompare(this, nextProps, nextState);
  // }

  render() {
    let tiles = [];

    for (let name in this.props.tiles) {
      if (this.props.tiles.hasOwnProperty(name)) {
        let tile = {};
        tile.stats = this.props.tiles[name];
        tile.x = 0;
        tile.y = 0;
        tile.key = name;
        tile.id = tile.key;
        tile.tile = name;
        tiles.push(tile);
      }
    }

    return (
      <Entity
        id="tileShop"
        position={[-1,1,-1]}
      >
        {
          tiles.map((tile, index)=>
            <Entity
              key={tile.key}
              class="shopItem"
              position={[
                index * constants.tile.width * 1.5,
                0,
                0,
              ]}
            >
              <Tile
                {...tile}
              />
            </Entity>
          )
        }
      </Entity>
    );
  }
}

export default TileShop;
