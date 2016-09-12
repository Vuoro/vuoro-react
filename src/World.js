import React, { Component } from "react";
import "aframe";
import { Entity, Scene } from "aframe-react";
import { Motion, spring } from 'react-motion';

import constants from "./constants";
import Island from "./Island";
import TileShop from "./TileShop";
import Camera from "./Camera";
import Cursor from "./Cursor";

class World extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hoveredTile: null,
    };
  }

  // setHoveredTile(id) {
  //   this.setState({hoveredTile: id})
  // }

  render() {
    let reticle;
    if (this.state.hoveredTile) {
      const reticleRadius = constants.tile.width / 1.618;
      const reticleThickness = this.state.hoveredTile ? constants.tile.height : 0;

      reticle = (
        <Motion style={{reticleThickness: spring(reticleThickness, constants.spring.tight)}}>
          {motion => (
            <Entity
              id="reticle"
              geometry={{
                primitive: "ring",
                radiusInner: reticleRadius,
                radiusOuter: reticleRadius + motion.reticleThickness,
                segmentsTheta: 4,
                segmentsPhi: 1,
              }}
              rotation={[-90, 0, 45]}
              position={[0, constants.tile.height * 0.5 + 0.01, 0]}
              material={{
                shader: "flat",
                color: constants.cursor.color,
              }}
            />
          )}
        </Motion>
      );
    }

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
          <Cursor/>
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
          // setHoveredTile={this.setHoveredTile.bind(this)}
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
                // setHoveredTile={this.setHoveredTile.bind(this)}
              />
            )
          }
        </Entity>

        {reticle}

      </Scene>
    );
  }
}

export default World;
