import React, { Component } from "react";
import { Entity } from "aframe-react";

import constants from "./constants";

class Camera extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Entity
        id="camera"
        camera={{
          far: constants.world.far + 1,
          near: constants.world.near,
          fov: this.props.inVR ? constants.world.VRFOV : constants.world.screenFOV,
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
      >

        {this.props.children}

      </Entity>
    );
  }
}

export default Camera;
