const caseStudies = require('./case-studies/case-studies.service.js');
const messages = require('./messages/messages.service.js');
const users = require('./users/users.service.js');
const scenarios = require('./scenarios/scenarios.service.js');
const runs = require('./runs/runs.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(caseStudies);
  app.configure(messages);
  app.configure(users);
  app.configure(scenarios);
  app.configure(runs);
};
