const serverMockup = {
  game: {
    turn: 0,
    currency: 100,
    record: 0,
  },

  tiles: {
    "LAKE": {
      cost: 0,
      health: 5,
      gain: 10,
      mods: {
        "0,1":  -1,
        "0,-1": -1,
        "1,0":  -2,
        "-1,0": -2,
      },
    },
  },

  islands: [
    {
      ".key": "V",
      tiles: {
        "0": {
          "2": {
            tile: "LAKE",
            health: 5,
          },
          "3": {
            tile: null,
            health: null,
          },
          "4": {
            tile: null,
            health: null,
          },
          "5": {
            tile: null,
            health: null,
          },
          "6": {
            tile: null,
            health: null,
          },
        },
      },
    },
    {
      ".key": "U",
    },
    {
      ".key": "O",
    },
    {
      ".key": "R",
    },
    {
      ".key": "O2",
    },
  ],
};

export default serverMockup;
