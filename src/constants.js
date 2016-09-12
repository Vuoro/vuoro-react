const constants = {

  time: {
    short: function(factor) {
      return 1000 / Math.pow(1.618, factor);
    },
    long: function(factor) {
      return 1000 * Math.pow(1.618, factor);
    },
  },

  spring: {
    tight: {
      stiffness: 170,
      damping: 19,
    },
  },

  world: {
    VRFOV: 80,
    screenFOV: 90,
    near: 0.001,
    far: 51*1000,
    interactionRange: 20,
  },

  cursor: {
    thickness: 0.0025,
    size: 0.01,
    distance: 0.5,
    segments: 36,
    color: "yellow",
  },

  island: {
    width: 0.5,
    height: 0.2,
    depth: 0.7,
    spacing: 0.1,
  },

  tile: {
    width: 0.1,
    height: 0.02,
    depth: 0.1,
  },

};

export default constants;
