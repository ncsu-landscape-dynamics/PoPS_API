// Initializes the `scenarios` service on path `/scenarios`
const createService = require('feathers-mongoose');
const createModel = require('../../models/scenarios.model');
const hooks = require('./scenarios.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/scenarios', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('scenarios');

  service.hooks(hooks);
};
