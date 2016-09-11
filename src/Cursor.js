import React, { Component } from "react";
import { Entity } from "aframe-react";

import constants from "./constants";

class Cursor extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.cursor);
  }

  render() {
    return (
      <Entity
        ref="cursor"
        id="cursor"
        cursor={{
          fuse: false,
        }}
        geometry={{
          primitive: "ring",
          radiusInner: constants.cursor.size - constants.cursor.thickness,
          radiusOuter: constants.cursor.size,
          segmentsTheta: constants.cursor.segments,
          segmentsPhi: 1,
        }}
        position={[0, 0, -constants.cursor.distance]}
        material={{
          shader: "flat",
          color: constants.cursor.color,
        }}
        // raycaster={{
        //   far: constants.interactionRange,
        //   // objects: ".interactable",
        // }}
      >

        {this.props.children}

      </Entity>
    );
  }
}

export default Cursor;
