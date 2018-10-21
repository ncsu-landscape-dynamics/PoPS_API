// Initializes the `runs` service on path `/runs`
const createService = require('feathers-mongoose');
const createModel = require('../../models/runs.model');
const hooks = require('./runs.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/runs', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('runs');

  service.hooks(hooks);
};
