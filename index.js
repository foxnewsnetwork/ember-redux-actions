/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-redux-actions',

  options: {
    nodeAssets: {
      'redux-actions': {
        import: [{
          path: 'dist/redux-actions.js',
          using: [{ transformation: 'amd', as: 'redux-actions' }]
        }]
      }
    }
  }
};
