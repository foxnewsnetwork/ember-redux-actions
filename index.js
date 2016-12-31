/* jshint node: true */
'use strict';
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

const reduxActions = new Funnel('node_modules/redux-actions/dist', {
  destDir: 'redux-actions',
  files: ['redux-actions.js']
});

const transformAMD = (name) => ({
  using: [{ transformation: 'amd', as: name }]
});

module.exports = {
  name: 'ember-redux-actions',

  included(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;

    const vendor = this.treePaths.vendor;
    // requires ember-cli 2.9+
    // https://github.com/ember-cli/ember-cli/pull/5976
    app.import(vendor + '/redux-actions/redux-actions.js', transformAMD('redux-actions'));

    return app;
  },

  treeForVendor(vendorTree) {
    const trees = [reduxActions];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    return mergeTrees(trees);
  }
};
