const assert = require('assert');
const app = require('../../src/app');

describe('\'runs\' service', () => {
  it('registered the service', () => {
    const service = app.service('runs');

    assert.ok(service, 'Registered the service');
  });
});
