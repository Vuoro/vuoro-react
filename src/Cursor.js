import React, { Component } from "react";
import { Entity, Animation } from "aframe-react";
import { Motion, spring } from 'react-motion';
import shallowCompare from "react-addons-shallow-compare";

import constants from "./constants";

class Cursor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  onStateAdded(event) {
    switch (event.detail.state) {
      case "cursor-hovering":
      default:
        this.setState({hovering: true})
    }
  }

  onStateRemoved(event) {
    switch (event.detail.state) {
      case "cursor-hovering":
      default:
        this.setState({hovering: false})
    }
  }

  render() {
    const scale = this.state.hovering ? 0 : 1;
    const springPreset = this.state.hovering ? constants.spring.tight : constants.spring.loose;

    return (
      <Entity
        id="cursor"
        onStateAdded={this.onStateAdded.bind(this)}
        onStateRemoved={this.onStateRemoved.bind(this)}
        // raycaster={{
        //   far: constants.interactionRange,
        //   objects: ".interactable",
        // }}
        cursor={{
          fuse: false,
        }}
      >
        <Motion style={{scale: spring(scale, springPreset)}}>
          {motion => (
            <Entity
              id="pointer"
              geometry={{
                primitive: "ring",
                radiusInner: constants.cursor.size - constants.cursor.thickness,
                radiusOuter: constants.cursor.size,
                segmentsTheta: constants.cursor.segments,
                segmentsPhi: 1,
              }}
              scale={[motion.scale, motion.scale, motion.scale]}
              position={[0, 0, -constants.cursor.distance]}
              material={{
                shader: "flat",
                color: constants.cursor.color,
              }}
            />
          )}
        </Motion>
      </Entity>
    );
  }
}

export default Cursor;
