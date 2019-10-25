import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | alumni', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:alumni');
    assert.ok(route);
  });
});
