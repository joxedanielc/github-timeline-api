const constants = require("./constants");

module.exports = {
  friendlyName: "Utils",

  description: "Utils something.",

  inputs: {
    apiPath: {
      type: String,
      required: true,
    },
  },

  exits: {
    success: {
      description: "All done.",
    },
  },

  fn: async function (inputs) {
    let apiPath = inputs.apiPath;

    return (options = {
      hostname: constants.hostname,
      path: apiPath,
      headers: {
        "User-Agent": constants.user_agent,
      },
      OAUth: process.env.GITHUB_ACCESS_TOKEN,
    });
  },
};
