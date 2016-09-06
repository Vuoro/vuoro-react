const serverMockup = {
  game: {
    turn: 0,
    currency: 100,
    record: 0,
  },

  tiles: {
    "Lake": {
      cost: 0,
      health: 5,
      gain: 1,
      mods: {
        "0,1":  -1,
        "0,-1": -1,
        "1,0":  -2,
        "-1,0": -2,
      },
    },
    "Forest": {
      cost: 0,
      health: 8,
      gain: -1,
      mods: {
        "0,1":  1,
        "0,-1": 1,
        "1,0":  1,
        "-1,0": 1,
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
        "1": {
          "1": {
            tile: "LAKE",
            health: 5,
          },
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
        "2": {
          "0": {
            tile: "LAKE",
            health: 5,
          },
          "1": {
            tile: "LAKE",
            health: 5,
          },
          "2": {
            tile: null,
            health: null,
          },
        },
        "3": {
          "1": {
            tile: "LAKE",
            health: 5,
          },
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
        "4": {
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
      tiles: {
        "0": {
          "1": {
            tile: "LAKE",
            health: 5,
          },
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
        "1": {
          "0": {
            tile: "LAKE",
            health: 5,
          },
          "1": {
            tile: "LAKE",
            health: 5,
          },
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
        "2": {
          "0": {
            tile: "LAKE",
            health: 5,
          },
          "1": {
            tile: "LAKE",
            health: 5,
          },
        },
        "3": {
          "0": {
            tile: "LAKE",
            health: 5,
          },
          "1": {
            tile: "LAKE",
            health: 5,
          },
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
        "4": {
          "1": {
            tile: "LAKE",
            health: 5,
          },
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
      }
    },
    {
      ".key": "O",
      tiles: {
        "0": {
          "1": {
            tile: "LAKE",
            health: 5,
          },
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
        },
        "1": {
          "0": {
            tile: "LAKE",
            health: 5,
          },
          "1": {
            tile: "LAKE",
            health: 5,
          },
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
        "2": {
          "0": {
            tile: "LAKE",
            health: 5,
          },
          "1": {
            tile: "LAKE",
            health: 5,
          },
          "6": {
            tile: null,
            health: null,
          },
        },
        "3": {
          "0": {
            tile: "LAKE",
            health: 5,
          },
          "1": {
            tile: "LAKE",
            health: 5,
          },
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
        "4": {
          "1": {
            tile: "LAKE",
            health: 5,
          },
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
        },
      },
    },
    {
      ".key": "R",
      tiles: {
        "0": {
          "0": {
            tile: null,
            health: null,
          },
          "1": {
            tile: null,
            health: null,
          },
          "2": {
            tile: null,
            health: null,
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
        "1": {
          "0": {
            tile: null,
            health: null,
          },
          "1": {
            tile: null,
            health: null,
          },
          "2": {
            tile: null,
            health: null,
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
        "2": {
          "3": {
            tile: null,
            health: null,
          },
          "6": {
            tile: null,
            health: null,
          },
        },
        "3": {
          "0": {
            tile: null,
            health: null,
          },
          "1": {
            tile: null,
            health: null,
          },
          "2": {
            tile: null,
            health: null,
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
        "4": {
          "0": {
            tile: null,
            health: null,
          },
          "1": {
            tile: null,
            health: null,
          },
          "2": {
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
        },
      },
    },
    {
      ".key": "O2",
      tiles: {
        "0": {
          "1": {
            tile: "LAKE",
            health: 5,
          },
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
        },
        "1": {
          "0": {
            tile: "LAKE",
            health: 5,
          },
          "1": {
            tile: "LAKE",
            health: 5,
          },
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
        "2": {
          "0": {
            tile: "LAKE",
            health: 5,
          },
          "1": {
            tile: "LAKE",
            health: 5,
          },
          "6": {
            tile: null,
            health: null,
          },
        },
        "3": {
          "0": {
            tile: "LAKE",
            health: 5,
          },
          "1": {
            tile: "LAKE",
            health: 5,
          },
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
        "4": {
          "1": {
            tile: "LAKE",
            health: 5,
          },
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
        },
      },
    },
  ],
};

export default serverMockup;
