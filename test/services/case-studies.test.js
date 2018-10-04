const assert = require('assert');
const app = require('../../src/app');

describe('\'CaseStudies\' service', () => {
  it('registered the service', () => {
    const service = app.service('case-studies');

    assert.ok(service, 'Registered the service');
  });
});
