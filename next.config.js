const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "assets/scss")],
  },
};

module.exports = {
  env: {
    MAILCHIMP_API_KEY: "c1c753235211329574e95b65166cd4c2-us7",
    MAILCHIMP_SERVER_PREFIX: "us7",
  },
};
