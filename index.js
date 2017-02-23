/* jshint node: true */
'use strict';

const transformAMD = (name) => ({
  using: [{ transformation: 'amd', as: name }]
});

module.exports = {
  name: 'ember-redux-actions',

  options: {
    nodeModulesToVendor: [
      'node_modules/redux-actions/dist'
    ]
  },

  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/redux-actions.js', transformAMD('redux-actions'));
  }
};
