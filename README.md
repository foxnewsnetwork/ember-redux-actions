# ember-redux-actions

[![CircleCI](https://circleci.com/gh/foxnewsnetwork/ember-redux-actions.svg?style=svg)](https://circleci.com/gh/foxnewsnetwork/ember-redux-actions)

Ember-cli friendly version of redux-actions from https://github.com/acdlite/redux-actions for use with ember-redux in adhering to the so-called "Flux Standard Action" compliance

## Usage
```javascript
import { createAction, createActions, handleAction, handleActions } from 'redux-actions';
```

## FAQs
Q: Why doesn't this work for me?
A: The most likely reason is that you're on a version of `ember-cli` below `2.10.x`, but anonymous AMD package support isn't supported until `2.10.x`. I suggest you upgrade your ember-cli 

## Installation

* `git clone <repository-url>` this repository
* `cd ember-redux-actions`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
