// Initializes the `assets` service on path `/assets`
const { Assets } = require('./assets.class');
const createModel = require('../../models/assets.model');
const hooks = require('./assets.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/assets', new Assets(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('assets');

  service.hooks(hooks);
};
