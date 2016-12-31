import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import { handleActions, createActions } from 'redux-actions';

moduleForAcceptance('Acceptance | sanity');

test('handleActions', function(assert) {
  assert.equal(typeof handleActions, 'function');
});

test('createActions', function(assert) {
  assert.equal(typeof createActions, 'function');
});

test('usage', function(assert) {
  const { appleJuice } = createActions({
    APPLE_JUICE: (apple, juice) => ({ apple, juice })
  });

  const action = appleJuice('granny smith', 'blender');
  assert.deepEqual(action, {
    type: 'APPLE_JUICE',
    payload: {
      apple: 'granny smith',
      juice: 'blender'
    }
  });
});
