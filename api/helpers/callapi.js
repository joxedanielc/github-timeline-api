const axios = require("axios");
const constants = require("../../constants");

module.exports = {
  friendlyName: "Callapi",

  description: "Callapi something.",

  inputs: {
    apiPath: {
      type: "string",
      required: true,
    },
    projectName: {
      type: "string",
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
    let projectName = inputs.projectName;
    let data = null;
    console.log(apiPath);
    await axios({
      method: "get",
      url: `https://api.github.com/${apiPath}`,
      headers: {
        "User-Agent": constants.user_agent,
        Authorization: "token " + sails.config.githubkey,
      },
    })
      .then(function (response) {
        console.log(response);
        data = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    return await sails.helpers.normalizedata(data, projectName);
  },
};
