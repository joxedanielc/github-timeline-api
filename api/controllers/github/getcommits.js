module.exports = {
  friendlyName: "Getcommit",

  description: "Getcommit github.",

  inputs: {
    reponame: {
      type: "string",
      required: true,
    },
    username: {
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: 201,
    },
    missingReponame: {
      statusCode: 400,
      description: "The repository name can not be found.",
    },
    nullReponame: {
      statusCode: 401,
      description:
        "The repository name property can not be null, empty or undefined.",
    },
    missingUsername: {
      statusCode: 400,
      description: "The username can not be found.",
    },
    nullUsername: {
      statusCode: 401,
      description: "The username property can not be null, empty or undefined.",
    },
    error: {
      description: "Something went wrong, try again",
    },
  },

  fn: async function (inputs, exits) {
    let reponame = inputs.reponame;
    let username = inputs.username;
    if (reponame === undefined || reponame === null) {
      throw exits.nullProjectName;
    }

    if (username === undefined || username === null) {
      throw exits.nullProjectName;
    }
    console.log(reponame, username);
    const options = await sails.helpers.callapi(
      `repos/${username}/${reponame}/commits`,
      reponame
    );

    console.log(options);

    return exits.success(options);
  },
};
