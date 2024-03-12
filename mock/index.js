// const Mock = require("mockjs");

const home = require('./home');
const mocks = [].concat(home);

module.exports = function ({ app }) {
  mocks.forEach((mock) => {
    if (mock.proxy) {
      app[mock.method](mock.url, (req, res) => {
        res.json(mock.response);
      });
    }
  });
};
