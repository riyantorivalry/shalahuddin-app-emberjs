import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | anggota/list', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:anggota/list');
    assert.ok(route);
  });
});
