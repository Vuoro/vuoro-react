import React, { Component } from "react";
import { Entity, Animation } from "aframe-react";

import constants from "./constants";

class Cursor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Entity
        raycaster={{
          far: constants.interactionRange,
          objects: ".interactable",
        }}
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
      >

        <Animation
          begin="mousedown"
          dur={constants.time.short(6)}
          easing="ease-out"
          attribute="scale"
          fill="both"
          to={[constants.cursor.hoverScale, constants.cursor.hoverScale, constants.cursor.hoverScale]}
        />

        <Animation
          begin="mouseup"
          dur={constants.time.short(3)}
          easing="ease-out"
          attribute="scale"
          fill="both"
          from={[constants.cursor.hoverScale, constants.cursor.hoverScale, constants.cursor.hoverScale]}
          to="1 1 1"
        />

        {this.props.children}

      </Entity>
    );
  }
}

export default Cursor;
