/*jshint node:true*/
module.exports = {
  description: 'Installation blueprints for redux-actions',

  normalizeEntityName() {},

  afterInstall() {
    return this.addPackagesToProject([
      {name: 'redux-actions', target: '^1.2.0'}
    ]);
  }
};
