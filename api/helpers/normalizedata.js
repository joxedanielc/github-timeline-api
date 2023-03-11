var moment = require("moment");

module.exports = {
  friendlyName: "Normalizedata",

  description: "Normalizedata something.",

  inputs: {
    data: {
      type: "ref",
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
    let data = inputs.data;
    let projectName = inputs.projectName;

    let commits = [];
    data.forEach((commit) => {
      let newCommit = {
        node_id: commit.node_id,
        sha: commit.sha,
        message: getMessage(commit),
        author: getAuthor(commit),
        datetime: getDateTime(commit),
      };
      commits.push(newCommit);
    });

    let dataNormalized = {
      projectName: projectName,
      commits: commits,
    };

    return dataNormalized;
  },
};

function getMessage(commit) {
  return commit.commit && commit.commit.message ? commit.commit.message : "n/a";
}

function getAuthor(commit) {
  return commit.commit && commit.commit.author && commit.commit.author.name
    ? commit.commit.author.name
    : "n/a";
}

function getDateTime(commit) {
  let date =
    commit.commit && commit.commit.author && commit.commit.author.date
      ? commit.commit.author.date
      : moment();
  console.log(date);
  return {
    date: moment(date).format("MMM-DD-YYYY"),
    time: moment(date).format("HH:mm"),
  };
}
