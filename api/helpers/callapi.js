const axios = require("axios");
const constants = require("./constants");

module.exports = {
  friendlyName: "Callapi",

  description: "Callapi something.",

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
    let data = null;
    await axios
      .get(apiPath, {
        baseURL: constants.hostname,
        headers: {
          "User-Agent": constants.user_agent,
          Authorization: "token " + process.env.GITHUB_ACCESS_TOKEN,
        },
      })
      .then(function (response) {
        data = response;
      })
      .catch(function (error) {
        console.log(error);
      });
    return data;
  },
};
