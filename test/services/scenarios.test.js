const assert = require('assert');
const app = require('../../src/app');

describe('\'scenarios\' service', () => {
  it('registered the service', () => {
    const service = app.service('scenarios');

    assert.ok(service, 'Registered the service');
  });
});
