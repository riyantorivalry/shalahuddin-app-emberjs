import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | alumni/add', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:alumni/add');
    assert.ok(route);
  });
});
