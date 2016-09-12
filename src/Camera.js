import React, { Component } from "react";
import { Entity } from "aframe-react";
import extras from "aframe-extras";
extras.controls.registerAll();

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
        universal-controls={{
          movementEnabled: this.props.inVR === false,
          movementSpeed:        20,
          movementEasing:       25,
          movementAcceleration: 20,
          // rotationSensitivity:  0.05,
          // fly: true,
        }}
      >

        {this.props.children}

      </Entity>
    );
  }
}

export default Camera;
