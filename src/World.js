import React, { Component } from "react";
import "aframe";
import { Entity, Scene } from "aframe-react";

import Island from "./Island";

class World extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Scene
        id="scene"
        stats={{
          enabled: process.env.NODE_ENV === "development",
        }}
        vr-mode-ui={{
          enabled: true,
        }}
      >

        <Entity
          id="camera"
          camera={{
            far: 51*1000,
            near: 0.001,
            fov: this.props.inVR ? 80 : 90,
            userHeight: 1.75,
          }}
          look-controls={{
            enabled: true
          }}
          wasd-controls={{
            enabled: true
          }}
          universal-controls={{
            movementEnabled: this.props.devMode,
            // movementSpeed:        5,
            // movementEasing:       15,
            // movementAcceleration: 80,
            // rotationSensitivity:  0.05,
          }}
        />

        <Entity
          id="skybox"
          geometry={{
            primitive: "box",
            width: 50*1000,
            height: 50*1000,
            depth: 50*1000,
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

        <Entity
          id="islands"
          position={[0,2,-2]}
          rotation={[-90,0,0]}
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
