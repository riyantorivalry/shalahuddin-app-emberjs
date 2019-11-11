import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | anggota/form', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:anggota/form');
    assert.ok(route);
  });
});
