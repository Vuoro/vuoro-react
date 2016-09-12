import React, { Component } from "react";
import { Entity } from "aframe-react";
// import { Motion, spring } from 'react-motion';
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

  // onStateAdded(event) {
  //   switch (event.detail.state) {
  //     case "cursor-hovering":
  //     default:
  //       this.addHovering();
  //   }
  // }
  //
  // onStateRemoved(event) {
  //   switch (event.detail.state) {
  //     case "cursor-hovering":
  //     default:
  //       this.removeHovering();
  //   }
  // }

  render() {
    // const cursorThickness = this.state.hovering ? 0 : constants.cursor.thickness;

    return (
      <Entity
        id="cursor"
        // onStateAdded={this.onStateAdded.bind(this)}
        // onStateRemoved={this.onStateRemoved.bind(this)}
        // raycaster={{
        //   far: constants.interactionRange,
        //   objects: ".interactable",
        // }}
        cursor={{
          fuse: false,
        }}
      >
        {/* <Motion style={{cursorThickness: spring(cursorThickness, constants.spring.tight)}}>
          {motion => ( */}
            <Entity
              id="pointer"
              geometry={{
                primitive: "ring",
                radiusInner: constants.cursor.size,
                radiusOuter: constants.cursor.size + constants.cursor.thickness,
                segmentsTheta: constants.cursor.segments,
                segmentsPhi: 1,
              }}
              position={[0, 0, -constants.cursor.distance]}
              material={{
                shader: "flat",
                color: constants.cursor.color,
              }}
            />
          {/* )}
        </Motion> */}
      </Entity>
    );
  }
}

export default Cursor;
