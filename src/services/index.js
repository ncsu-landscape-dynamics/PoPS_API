const caseStudies = require('./case-studies/case-studies.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(caseStudies);
};
