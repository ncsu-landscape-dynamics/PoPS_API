// Initializes the `CaseStudies` service on path `/case-studies`
const createService = require('feathers-mongoose');
const createModel = require('../../models/case-studies.model');
const hooks = require('./case-studies.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/case-studies', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('case-studies');

  service.hooks(hooks);
};
