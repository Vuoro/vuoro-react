import React, { Component } from "react";
import "aframe";
import { Entity, Scene } from "aframe-react";

class World extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Scene
        id="scene"
        vr-mode-ui={{
          enabled: true,
        }}
      >

        <Entity
          id="camera"
          camera={{
            far: 50*1000,
            near: 0.001,
            fov: this.props.inVR ? 80 : 90,
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
          id="sky"
          geometry={{
            primitive: "sphere",
            radius: 49*1000,
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
            color: "#333",
          }}
        />

        <Entity
          geometry={{
            primitive: "sphere",
            radius: 2,
          }}
          position={[0,0,-3]}
          material={{
            color: "red",
          }}
        />

      </Scene>
    );
  }
}

export default World;
