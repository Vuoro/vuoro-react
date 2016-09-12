import React, { Component } from "react";
import "aframe";
import { Entity, Scene } from "aframe-react";

import constants from "./constants";
import Island from "./Island";
import TileShop from "./TileShop";
import Camera from "./Camera";
import Cursor from "./Cursor";

class World extends Component {
  constructor(props) {
    super(props);

    this.state = {
      somethingIsHovered: false,
    };
  }

  onHover() {
    this.setState({somethingIsHovered: true})
  }

  onBlur() {
    this.setState({somethingIsHovered: false})
  }

  render() {
    return (
      <Scene
        id="scene"
        stats={{
          enabled: process.env.NODE_ENV === "development",
        }}
        vr-mode-ui={{
          enabled: false,
        }}
      >

        <Camera {...this.props}>
          <Cursor
            onHover={this.onHover.bind(this)}
            onBlur={this.onBlur.bind(this)}
            {...this.state}
          />
        </Camera>

        <Entity
          id="skybox"
          geometry={{
            primitive: "box",
            width: constants.world.far * 2,
            height: constants.world.far * 2,
            depth: constants.world.far * 2,
          }}
          material={{
            shader: "flat",
            color: "#000",
          }}
          scale={[1, 1, -1]}
        />

        <Entity
          id="ambientLight"
          light={{
            type: "ambient",
            color: "#222",
          }}
        />

        <Entity
          id="directionalLight"
          light={{
            type: "directional",
            color: "white",
            intensity: 1.5,
          }}
          position={[
            -0.75,
            1,
            0.5,
          ]}
        />

        <TileShop
          tiles={this.props.server.tiles}
        />

        <Entity
          id="islands"
          position={[0,1,-2]}
        >
          {
            this.props.server.islands.map((island) =>
              <Island
                key={island[".key"]}
                {...island}
              />
            )
          }
        </Entity>

      </Scene>
    );
  }
}

export default World;
