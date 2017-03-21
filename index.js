/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-redux-actions',

  options: {
    nodeAssets: {
      'redux-actions': {
        vendor: ['dist/redux-actions.js']
      }
    }
  },

  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/redux-actions/dist/redux-actions.js', {
      using: [{ transformation: 'amd', as: 'redux-actions' }]
    });
  }
};
